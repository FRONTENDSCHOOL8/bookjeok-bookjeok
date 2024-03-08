import { MessageBubble, NomalTitle, ThinTextForm } from '@/components/Atoms';
import useUserInfoStore from '@/store/useUserInfoStore';
import { getDocumentTitle } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useParams } from 'react-router-dom';
import { FetchChatRoom } from './FetchChatRoom';

export function ChatRoom() {
  const { userInfo } = useUserInfoStore();
  const { clubId } = useParams();

  const chatRoom = useLoaderData();
  const { data } = useQuery({
    queryKey: ['chatRoom', clubId],
    queryFn: () => FetchChatRoom(clubId),
    initialData: chatRoom,
  });

  console.log(data);
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('모임 이름이 들어가야합니다')}</title>
      </Helmet>
      <div className="relative flex h-svh w-full flex-col">
        <NomalTitle backLink path={`chatRoomList/${userInfo.id}`}>
          채팅 페이지
        </NomalTitle>
        <main className="flex flex-grow flex-col px-4 py-3">
          <div className="flex flex-grow flex-col justify-end">
            <MessageBubble
              src="/defaultProfile.webp"
              alt="작성자"
              nickname="작성자"
              time="오후 2:00"
            >
              내용
            </MessageBubble>
            <MessageBubble
              align="right"
              src="/defaultProfile.webp"
              alt="작성자"
              nickname="작성자"
              time="오후 2:00"
            >
              내용
            </MessageBubble>
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
