import pb from '@/api/pocketbase';
import { queryClient } from '@/client/queryClient';
import { MessageBubble, NomalTitle, ThinTextForm } from '@/components/Atoms';
import useUserInfoStore from '@/store/useUserInfoStore';
import { createRandomId, getDocumentTitle, getPbImgs } from '@/utils';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useParams } from 'react-router-dom';
import { FetchChatRoom } from './FetchChatRoom';

export function ChatRoom() {
  const { userInfo } = useUserInfoStore();
  const { chattingRoomId } = useParams();

  const chattingRoom = useLoaderData();
  const {
    data: { expand, title, message },
  } = useQuery({
    queryKey: ['chattingRoom', chattingRoomId],
    queryFn: () => FetchChatRoom(chattingRoomId),

    initialData: chattingRoom,
    refetchInterval: 1000 * 2,
    staleTime: 1000 * 10,
  });

  const sendMessage = useMutation({
    mutationFn: async (addData) =>
      await pb.collection('message').create(addData),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['message'] }),
  });

  const updateChattingRoom = useMutation({
    mutationFn: async (updateData) =>
      await pb.collection('chattingRoom').update(chattingRoomId, updateData),
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: ['chattingRoom'],
      }),
  });

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const messageId = createRandomId();
    data.id = messageId;
    data.sendUser = userInfo.id;
    data.chattingRoom = chattingRoomId;

    await sendMessage.mutateAsync(data); // create
    await updateChattingRoom.mutateAsync({ message: [...message, messageId] }); // update
    const inputText = document.getElementById('text');
    inputText.value = '';
  };

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle(title)}</title>
      </Helmet>
      <div className="relative flex min-h-svh w-full flex-col">
        <NomalTitle
          className="fixed left-[50%] top-0 z-10 w-full max-w-[430px] translate-x-[-50%] shadow-md"
          backLink
          path={`chatRoomList/${userInfo.id}`}
        >
          {title}
        </NomalTitle>
        <main className="flex  flex-grow flex-col px-4 py-3">
          <output className="flex flex-grow flex-col justify-end py-10">
            <ul className="*:py-[9px]">
              {expand.message
                ? expand.message.map(
                    ({ id, text, created, expand: { sendUser } }) => (
                      <MessageBubble
                        key={id}
                        align={sendUser.id === userInfo.id ? 'right' : ''}
                        src={getPbImgs(sendUser)}
                        alt={sendUser.nickname}
                        nickname={sendUser.nickname}
                        time={created.slice(11, 16)}
                      >
                        {text}
                      </MessageBubble>
                    )
                  )
                : ''}
            </ul>
          </output>
          <div className="mx-4">
            <div className="fixed bottom-0 left-[50%] mt-auto w-full  max-w-[414px] translate-x-[-50%]">
              <ThinTextForm
                className=""
                onSubmit={handleSendMessage}
                type="text"
                placeholder="메세지를 입력하세요."
                sendButton
                id="text"
                name="text"
              >
                채팅 메세지
              </ThinTextForm>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
