import pb from '@/api/pocketbase';
import {
  BlankContents,
  NomalTitle,
  RoundImage,
  ThinTextForm,
} from '@/components/Atoms';
import { DobbleButtonModal, GNB } from '@/components/Molecules';
import { useDebounce } from '@/hooks';
import { FetchChattingRoomList } from '@/pages/Chatting/ChatRoomListPage';
import useUserInfoStore from '@/store/useUserInfoStore';
import { getCreatedHoursAgo, getDocumentTitle, getPbImgs } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { string } from 'prop-types';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData, useParams } from 'react-router-dom';

export function ChatRoomListPage() {
  const chattingRoom = useLoaderData();
  const { userInfo } = useUserInfoStore();
  const { userId } = useParams();

  const [observer, setObserver] = useState(false);

  useEffect(() => {
    pb.collection('chattingRoom').subscribe(
      '*',
      function (e) {
        // console.log(e.action);
        if (
          e.record.expand.message[e.record.expand.message.length - 1]
            .sendUser !== userInfo.id
        ) {
          setObserver(true);
          // console.log('조건처리로 업데이트 된', observer);
        }
      },
      { expand: 'message' }
    );

    return () => {
      pb.collection('chattingRoom').unsubscribe();
      setObserver(false);
      console.log('클린업 함수로 업데이트 된', observer);
    };
  }, [observer, userInfo?.id]);

  const { data: chattingRoomData } = useQuery({
    queryKey: ['chattingRoomList', userId, observer],
    queryFn: () => FetchChattingRoomList(userId),
    initialData: chattingRoom,
  });

  const [searchKey, setSearchKey] = useState();
  const [isSearch, setIsSearch] = useState(false);
  const [searchResult, setSearchResult] = useState();

  const debouncedKey = useDebounce(searchKey, 500);

  const handleSearch = ({ target }) => {
    setSearchKey(target.value);
    setIsSearch(target.value !== '');
  };
  useEffect(() => {
    setSearchResult(
      chattingRoomData?.filter((item) => {
        return item['title'].includes(debouncedKey);
      })
    );
  }, [debouncedKey, chattingRoomData]);

  if (userInfo?.id !== userId) {
    return (
      <DobbleButtonModal
        open
        svgId="logo"
        primaryButtonPath="/"
        primaryButtonText="로그인 하러가기"
        title="회원이 아니신가요?"
      >
        북적북적을 이용하려면 로그인이 필요합니다.
      </DobbleButtonModal>
    );
  }

  const content = isSearch ? searchResult : chattingRoomData;
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('채팅리스트')}</title>
      </Helmet>
      <div className="relative flex min-h-svh w-full flex-col">
        <NomalTitle path="mainClub">나의 채팅</NomalTitle>
        <main className="px-4 pb-20">
          <ThinTextForm
            onChange={handleSearch}
            type="search"
            searchIcon
            placeholder="모임을 입력해주세요."
            className="py-4"
          >
            검색
          </ThinTextForm>
          <ul>
            {content && content.length > 1 ? (
              content.map(({ id, created, expand: { socialing, message } }) => (
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
              ))
            ) : (
              <BlankContents
                title="아직 참여한 채팅이 없어요."
                description="북적북적 모임에 참여하시고, 다양한 사람들과 대화를 나눠보세요!"
              />
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
        <RoundImage src={src} alt="" size="md"></RoundImage>
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col">
            <span className="line-clamp-1 text-b-1-regular text-bjblack">
              {title}
            </span>
            <p className="max-w-[290px] truncate text-b-2-regular text-bjgray-500">
              {message}
            </p>
          </div>
          <span className="whitespace-nowrap pl-2 text-b-3-light text-bjgray-400">
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
