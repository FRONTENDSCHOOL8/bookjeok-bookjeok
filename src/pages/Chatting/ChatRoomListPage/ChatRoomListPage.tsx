import pb from '@/api/pocketbase';
import { BlankContents, NomalTitle, ThinTextForm } from '@/components/Atoms';
import { ChatList, DobbleButtonModal, GNB } from '@/components/Molecules';
import { useDebounce, useLoaderData } from '@/hooks';
import {
  FetchChattingRoomList,
  Texpand,
} from '@/pages/Chatting/ChatRoomListPage';
import useUserInfoStore from '@/store/useUserInfoStore';
import { ChattingRoomResponse, Collections } from '@/types/pocketbase-types';
import { getDocumentTitle, getPbImgs } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

export function ChatRoomListPage() {
  const chattingRoom = useLoaderData<ChattingRoomResponse<Texpand>[]>();
  const { userInfo } = useUserInfoStore();
  const { userId } = useParams();

  const [observer, setObserver] = useState(false);

  useEffect(() => {
    pb.collection(Collections.ChattingRoom).subscribe<
      ChattingRoomResponse<Texpand>
    >(
      '*',
      function (e) {
        // console.log(e.action);

        if (
          e.record.expand!.message[e.record.expand!.message.length - 1]
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
      // console.log('클린업 함수로 업데이트 된', observer);
    };
  }, [observer, userInfo?.id]);

  const { data: chattingRoomData } = useQuery({
    queryKey: ['chattingRoomList', userId, observer],
    queryFn: () => FetchChattingRoomList(userId!),
    initialData: chattingRoom,
  });

  const [searchKey, setSearchKey] = useState('');
  const [isSearch, setIsSearch] = useState(false);
  const [searchResult, setSearchResult] =
    useState<ChattingRoomResponse<Texpand>[]>();

  const debouncedKey = useDebounce(searchKey, 500);

  const handleSearch = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const { target } = e;
      setSearchKey(target.value);
      setIsSearch(target.value !== '');
    },
    [searchKey, isSearch]
  );
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
        <NomalTitle path="main/club">나의 채팅</NomalTitle>
        <main className="flex flex-1 flex-col px-4 pb-20">
          <ThinTextForm
            onChange={handleSearch}
            onSubmit={(e) => {
              e.preventDefault();
            }}
            type="search"
            searchIcon
            placeholder="모임을 입력해주세요."
            className="py-4"
          >
            검색
          </ThinTextForm>
          <ul className="flex flex-1 flex-col">
            {content && content.length >= 1 ? (
              content.map(({ id, created, expand }) => {
                if (expand) {
                  const { socialing, message }: Texpand = expand;
                  return (
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
                  );
                }
              })
            ) : (
              <li className="flex flex-1">
                <BlankContents
                  title="아직 참여한 채팅이 없어요."
                  description="북적북적 모임에 참여하시고, 다양한 사람들과 대화를 나눠보세요!"
                />
              </li>
            )}
          </ul>
        </main>
        <GNB createClub className="fixed" />
      </div>
    </>
  );
}
