import pb from '@/api/pocketbase';
import { NomalTitle, RoundImage, ThinTextForm } from '@/components/Atoms';
import { GNB } from '@/components/Molecules';
import useUserInfoStore from '@/store/useUserInfoStore';
import { getDocumentTitle, getPbImgs } from '@/utils';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { string } from 'prop-types';
import getCreatedHoursAgo from '@/utils/getCreatedHoursAgo';

export function ChatRoomListPage() {
  const { userInfo } = useUserInfoStore();

  const [chattingRoom, setChattingRoom] = useState([
    {
      expand: {
        socialing: { title: '', id: '1' },
        users: {},
        message: ['', ''],
      },
    },
  ]);

  useEffect(() => {
    const fetchPB = async () => {
      try {
        const data = await pb.collection('chattingRoom').getFullList({
          filter: `users ?~ "${userInfo.id}"`,
          expand: 'socialing, users, message',
          sort: '-updated',
        });

        await setChattingRoom(data);
      } catch (error) {
        console.error('채팅방 가져오기 오류');
      }
    };
    fetchPB();
  }, [userInfo]);

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('채팅리스트')}</title>
      </Helmet>
      <div className="relative flex h-screen w-full flex-col">
        <NomalTitle backLink path="/">
          채팅리스트
        </NomalTitle>
        <div className="px-4">
          <ThinTextForm
            type="search"
            searchIcon
            placeholder="search"
            className="py-2"
          >
            검색
          </ThinTextForm>
          <ul>
            {chattingRoom.map(({ id, expand: { socialing, message } }) => (
              <ChatList
                title={socialing.title}
                key={socialing.id}
                id={id}
                updated={message ? message[0].updated : ''}
                src={getPbImgs(socialing)}
                message={message ? message[0].text : ''}
              ></ChatList>
            ))}
          </ul>
        </div>
        <GNB className="fixed" />
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
            <p className="text-b-2-regular text-bjgray-500">{message}</p>
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
