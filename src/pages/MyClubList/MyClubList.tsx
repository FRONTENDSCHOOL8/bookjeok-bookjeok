import {
  NomalTitle,
  Svg,
  ThinTextForm,
  BlankContents,
} from '@/components/Atoms';
import pb from '@/api/pocketbase';
import { useDebounce } from '@/hooks';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import { ClubList, GNB } from '@/components/Molecules';
import useUserInfoStore from '@/store/useUserInfoStore';
import { getPbImgs, getDocumentTitle, calcDay } from '@/utils';
import {
  Collections,
  SocialingResponse,
  SocialingRecord,
} from '@/types/pocketbase-types';

const INITIAL_QUANTITY = {
  createdClub: 3,
  confirmedClub: 3,
};

const style = {
  ul: 'flex flex-col gap-y-4 mb-4',
  h2: 'pl-1 py-2 text-b-0-medium text-bjblack',
};

type StateType = {
  confirmedClub: SocialingResponse[];
  createdClub: SocialingResponse[];
};
export function MyClubList() {
  const { userInfo } = useUserInfoStore();
  const [showQuantity, setShowQuantity] = useState(INITIAL_QUANTITY);
  const [clubData, setClubData] = useState<StateType>();

  const [isSearchState, setIsSearchState] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchResult, setSearchResult] = useState<StateType>();
  const debouncedKeyword = useDebounce(searchKeyword, 500);

  const { data: fetchAllClubData, isSuccess } = useQuery({
    queryFn: async () => {
      if (userInfo) {
        const fetchData = (
          await pb
            .collection(Collections.Socialing)
            .getList<SocialingResponse>(1, 10, {
              filter: `createUser = "${userInfo.id}" || confirmUser ?~ "${userInfo.id}" `,
            })
        ).items;
        return fetchData;
      }
    },
    queryKey: ['allClubData', userInfo?.id],
  });

  useEffect(() => {
    if (isSuccess) {
      const created: SocialingResponse[] = [];
      const confirmed: SocialingResponse[] = [];
      fetchAllClubData?.forEach((item) => {
        if (item.createUser === userInfo?.id) {
          created.push(item);
        } else {
          confirmed.push(item);
        }
      });
      setClubData({ createdClub: created, confirmedClub: confirmed });
    }
  }, [isSuccess, fetchAllClubData, userInfo?.id]);

  // 더보기 버튼 클릭시 작동하는 함수
  const handleMoreValue: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const target = e.currentTarget;

    if (clubData && target.name === 'createdClub') {
      setShowQuantity({
        ...showQuantity,
        [target.name]: clubData.createdClub.length,
      });
    }
    if (clubData && target.name === 'confirmedClub') {
      setShowQuantity({
        ...showQuantity,
        [target.name]: clubData.confirmedClub.length,
      });
    }
  };

  // 검색창 이벤트 함수
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
    setIsSearchState(e.target.value !== '');
  };

  //검색시 실행되는 이펙트 함수
  useEffect(() => {
    if (clubData) {
      const confirmValue = clubData.confirmedClub?.filter((item) =>
        item['title']?.includes(debouncedKeyword)
      );
      const createValue = clubData.createdClub?.filter(
        (item: SocialingRecord) => item['title']?.includes(debouncedKeyword)
      );
      setSearchResult({
        confirmedClub: confirmValue,
        createdClub: createValue,
      });
    }
  }, [debouncedKeyword]);

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('나의 모임')}</title>
      </Helmet>
      <div className="relative flex min-h-svh w-full flex-grow flex-col">
        <NomalTitle>나의 모임</NomalTitle>
        <ThinTextForm
          onChange={handleSearch}
          type="search"
          searchIcon
          placeholder="모임명을 입력해주세요."
          className="px-4 py-4"
        >
          검색
        </ThinTextForm>

        <>
          {clubData?.createdClub.length == 0 &&
          clubData?.confirmedClub.length === 0 ? (
            <BlankContents
              title="아무런 활동이 없으시네요..."
              description="북적북적에서 독후감을 기록하고,
          다른 사람과 함께 생각을 공유해보세요 !"
            />
          ) : (
            <>
              <main className="px-4">
                <h2 className={`${style['h2']}`}>참여중인 모임</h2>
                <ul className={`${style['ul']}`}>
                  {searchResult && isSearchState
                    ? searchResult['confirmedClub']?.map((item) => (
                        <ClubList
                          id={item.id}
                          key={item.id}
                          title={item.title}
                          schedule={calcDay(item.dateTime)}
                          img={getPbImgs(item)}
                        ></ClubList>
                      ))
                    : clubData &&
                      clubData.confirmedClub
                        ?.slice(0, showQuantity.confirmedClub)
                        ?.map((item) => (
                          <ClubList
                            id={item.id}
                            key={item.id}
                            title={item.title}
                            schedule={calcDay(item.dateTime)}
                            img={getPbImgs(item)}
                          ></ClubList>
                        ))}
                  {/*더보기버튼*/}
                  {clubData &&
                  !isSearchState &&
                  clubData.confirmedClub?.length >
                    showQuantity.confirmedClub ? (
                    <button
                      name="confirmedClub"
                      onClick={handleMoreValue}
                      className="flex items-center justify-center py-1"
                    >
                      더 보기
                      <Svg id="plus" size={14} className="ml-1" />
                    </button>
                  ) : (
                    ''
                  )}
                </ul>
                <hr className="mb-4" />
                <h2 className={`${style['h2']}`}>내가 만든 모임</h2>
                <ul className={`${style['ul']} mb-[90px]`}>
                  {searchResult && isSearchState
                    ? searchResult['createdClub']?.map((item) => (
                        <ClubList
                          id={item.id}
                          key={item.id}
                          title={item.title}
                          schedule={calcDay(item.dateTime)}
                          img={getPbImgs(item)}
                        ></ClubList>
                      ))
                    : clubData &&
                      clubData.createdClub
                        ?.slice(0, showQuantity.createdClub)
                        ?.map((item) => (
                          <ClubList
                            id={item.id}
                            key={item.id}
                            title={item.title}
                            schedule={calcDay(item.dateTime)}
                            img={getPbImgs(item)}
                          ></ClubList>
                        ))}
                  {!isSearchState &&
                  clubData &&
                  showQuantity.createdClub < clubData.createdClub?.length ? (
                    <button
                      name="createdClub"
                      onClick={handleMoreValue}
                      className="flex items-center justify-center py-1"
                    >
                      더 보기
                      <Svg id="plus" size={14} className="ml-1" />
                    </button>
                  ) : (
                    ''
                  )}
                </ul>
              </main>
            </>
          )}
        </>
      </div>
      <GNB createClub className="fixed"></GNB>
    </>
  );
}
