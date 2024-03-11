import { NomalTitle, RoundImage, ThinTextForm } from '@/components/Atoms';
import { GNB } from '@/components/Molecules';
import useUserInfoStore from '@/store/useUserInfoStore';
import { getCreatedHoursAgo, getDocumentTitle, getPbImgs } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { string } from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { FetchChattingRoomList } from '@/pages/Chatting/ChatRoomListPage';

export function ChatRoomListPage() {
  const chattingRoom = useLoaderData();
  const { userInfo } = useUserInfoStore();
  const { userId } = useParams();

  const { data: chattingRoomData } = useQuery({
    queryKey: ['chattingRoomList', userId],
    queryFn: () => FetchChattingRoomList(userId),
    initialData: chattingRoom,
  });

  if (userInfo.id !== userId) {
    return <div>잘못된 접근입니다.</div>;
  }
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('채팅리스트')}</title>
      </Helmet>
      <div className="relative flex h-svh w-full flex-col">
        <NomalTitle>나의 채팅</NomalTitle>
        <main className="px-4">
          <ThinTextForm
            type="search"
            searchIcon
            placeholder="search"
            className="py-2"
          >
            검색
          </ThinTextForm>
          <ul>
            {chattingRoomData?.map(
              ({ id, created, expand: { socialing, message } }) => (
                <ChatList
                  title={socialing.title}
                  key={socialing.id}
                  id={id}
                  updated={
                    message ? message[message.length - 1].updated : created
                  }
                  src={getPbImgs(socialing)}
                  message={message ? message[message.length - 1].text : ''}
                ></ChatList>
              )
            )}
          </ul>
        </main>
        <GNB createClub className="fixed" />
      </div>
    </>
  );
}

const ChatList = ({ id, src, title, updated, message }) => {
  return (
    <li>
      <Link to={`/chatRoom/${id}`} className="flex h-16 items-center gap-x-4">
        <RoundImage src={src} alt="alt" size="md"></RoundImage>
        <div className="flex w-full justify-between">
          <div className="flex flex-col">
            <span className="line-clamp-1 text-b-1-regular text-bjblack">
              {title}
            </span>
            <p className="max-w-[290px] truncate  text-b-2-regular text-bjgray-500">
              {message}
            </p>
          </div>
          <span className="text-b-3-light text-bjgray-400">
            {getCreatedHoursAgo(updated)}
          </span>
        </div>
      </Link>
    </li>
  );
};

ChatList.propTypes = {
  id: string,
  src: string,
  title: string,
  message: string,
  updated: string,
};
