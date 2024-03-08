import { MessageBubble, NomalTitle, ThinTextForm } from '@/components/Atoms';
import useUserInfoStore from '@/store/useUserInfoStore';
import { getDocumentTitle, getPbImgs } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useParams } from 'react-router-dom';
import { FetchChatRoom } from './FetchChatRoom';

export function ChatRoom() {
  const { userInfo } = useUserInfoStore();
  const { clubId } = useParams();

  const chatRoom = useLoaderData();
  const {
    data: { expand, title },
  } = useQuery({
    queryKey: ['chatRoom', clubId],
    queryFn: () => FetchChatRoom(clubId),
    initialData: chatRoom,
    refetchInterval: 1000 * 2,
    staleTime: 1000 * 10,
  });
  const { message = [], users } = expand;
  console.log('message', message);
  console.log('users', users);

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle(title)}</title>
      </Helmet>
      <div className="relative flex h-svh w-full flex-col">
        <NomalTitle backLink path={`chatRoomList/${userInfo.id}`}>
          {title}
        </NomalTitle>
        <main className="flex flex-grow flex-col px-4 py-3">
          <div className="flex flex-grow flex-col justify-end">
            <ul className="*:py-[9px]">
              {message.map(({ id, text, created, expand: { sendUser } }) => (
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
              ))}
            </ul>
          </div>
          <div className="mt-auto">
            <ThinTextForm
              type="text"
              placeholder="메세지를 입력하세요."
              sendButton
            >
              채팅 메세지
            </ThinTextForm>
          </div>
        </main>
      </div>
    </>
  );
}
