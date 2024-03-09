import pb from '@/api/pocketbase';
import { queryClient } from '@/client/queryClient';
import { MessageBubble, NomalTitle, ThinTextForm } from '@/components/Atoms';
import useUserInfoStore from '@/store/useUserInfoStore';
import { getDocumentTitle, getPbImgs } from '@/utils';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useParams } from 'react-router-dom';
import { FetchChatRoom } from './FetchChatRoom';

export function ChatRoom() {
  useLayoutEffect(() => {
    document.documentElement.style.overflowY = 'hidden';
    return () => {
      document.documentElement.style.removeProperty('overflow-y');
    };
  });

  const { userInfo } = useUserInfoStore();
  const { chattingRoomId } = useParams();
  const chattingRoom = useLoaderData();

  const [observer, setObserver] = useState(false);

  useEffect(() => {
    pb.collection('chattingRoom').subscribe(
      chattingRoomId,
      function (e) {
        console.log(e.action);
        if (
          e.record.expand.message[e.record.expand.message.length - 1]
            .sendUser !== userInfo.id
        ) {
          setObserver(true);
          console.log('조건처리로 업데이트 된', observer);
        }
      },
      { expand: 'message' }
    );

    return () => {
      pb.collection('chattingRoom').unsubscribe(chattingRoomId);
      setObserver(false);
      console.log('클린업 함수로 업데이트 된', observer);
    };
  });

  const { data: chattingRoomData } = useQuery({
    queryKey: ['chattingRoom', chattingRoomId, observer],
    queryFn: () => FetchChatRoom(chattingRoomId),
    initialData: chattingRoom,
  });
  const { expand, title, message } = chattingRoomData || {};

  const chattingListRef = useRef(null);

  useLayoutEffect(() => {
    if (chattingListRef.current) {
      chattingListRef.current.scrollTop = chattingListRef.current.scrollHeight;
    }
  }, [message.length]);

  const mutateMessage = useMutation({
    mutationFn: async (newMessage) => {
      const { ...addMessage } = newMessage;

      const addedMessage = await pb
        .collection('message')
        .create(addMessage, { expand: 'sendUser' });

      const nextChattingRoom = {
        ...chattingRoomData,
        message: [...chattingRoomData.message, addedMessage.id],
        expand: {
          ...chattingRoomData.expand,
          message: [...chattingRoomData.expand.message, addedMessage],
        },
      };

      await pb
        .collection('chattingRoom')
        .update(chattingRoomId, nextChattingRoom);
    },
    onMutate: async (newMessage) => {
      const querykey = ['chattingRoom', chattingRoomId, observer];
      await queryClient.cancelQueries({ querykey });
      const perviousChattingRoom = queryClient.getQueryData(querykey);
      newMessage.created = new Date().toISOString();

      const nextChattingRoom = {
        ...chattingRoomData,
        message: [...chattingRoomData.message, newMessage.id],
        expand: {
          ...chattingRoomData.expand,
          message: [...chattingRoomData.expand.message, newMessage],
        },
      };

      queryClient.setQueryData(querykey, nextChattingRoom);
      document.getElementById('text').value = '';
      return { perviousChattingRoom };
    },
    onError: (error, updateData, context) => {
      queryClient.setQueryData(
        ['chattingRoom', chattingRoomId],
        context.perviousChattingRoom
      );
    },
    onSettled: () => {
      console.log('서버에 채팅 데이터 업데이트 성공');
      queryClient.invalidateQueries({
        queryKey: ['chattingRoom', chattingRoomId],
      });
    },
  });

  const handleSendMessage = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newMessage = Object.fromEntries(formData.entries());
    // const messageId = createRandomId();
    // data.id = messageId;
    newMessage.sendUser = userInfo.id;
    newMessage.chattingRoom = chattingRoomId;

    const sendUser = expand.users.find((u) => u.id === userInfo.id);
    newMessage.expand = {};
    newMessage.expand.sendUser = sendUser;

    await mutateMessage.mutateAsync(newMessage);
  };

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle(title)}</title>
      </Helmet>
      <div className="relative flex min-h-svh w-full min-w-[320px] flex-col">
        <NomalTitle
          className="fixed left-[50%] top-0 w-full max-w-[430px] translate-x-[-50%]"
          backLink
          path={`chatRoomList/${userInfo.id}`}
        >
          {title}
        </NomalTitle>
        <main className="flex flex-grow flex-col px-4 py-3">
          <div className="flex flex-grow flex-col justify-start py-10">
            <ul
              ref={chattingListRef}
              className="mt-1 h-[calc(100vh-56px-40px)] overflow-y-auto bg-slate-50 *:py-[9px]"
            >
              {expand.message?.map(
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
              )}
            </ul>
          </div>
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
