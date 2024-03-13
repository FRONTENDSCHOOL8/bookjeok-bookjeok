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
/*
1. socialing db에서 applicant가 사용자인 경우, 
  creator가 나인 경우를 분리하여 렌더링
2. 3개이상인 경우 더보기 버튼 =>  
  일단 3개가 초기 값인 상태를 보여줌......
  더보기 버튼을 누르면 전체 길이로 상태변경 이게되나? 이게되네...
    그럼 더보기 버튼은 클럽 전체 수가 3보다 많을때 보여주며 
    보여진 정보개수 (showValue)가 전체 개수이면 더보기 버튼이 사라져야됨 ! 

3. 검색 .........왜 수업 제대로 못들었지 
  사용자가 입력을 멈춘뒤 500ms 뒤... 
  전체 리스트에서 검색함 그러면..........우째해야대?
  또 db에 접속할순 없음...
  있는 전체 리스트에서 
  약간 이런식으로 갖고오고싶음 
  select * from 테이블 where title like %검색어% ..이런식 ..
  정규식으로 해야되나...=>^.*검색어.*$ ? 
  근데 ... 초-중-종성 분리해야되나...? 

  지금 검색 상태임? 을 어케 해야대? Input에 머 하나 있으면 검색상태인걸까나
  검색 결과를 담은 상태를 생성하자 그 결과엔 {created:, confirumed:}이케 있는거임..... 
  그걸 그대로 렌더링 ...
  
4. 해당 항목 클릭시 상세페이지로 이동 ! 
*/

const INITIAL_QUANTITY = {
  createdClub: 3,
  confirmedClub: 3,
};

const style = {
  ul: 'flex flex-col gap-y-4 mb-4',
  h2: 'pl-1 py-2 text-b-0-medium text-bjblack',
};

export function MyClubList() {
  const { userInfo } = useUserInfoStore();
  const [showQuantity, setShowQuantity] = useState(INITIAL_QUANTITY);
  const [clubData, setClubData] = useState({});

  const [isSearchState, setIsSearchState] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState();
  const [searchResult, setSearchResult] = useState();
  const debouncedKeyword = useDebounce(searchKeyword, 500);

  const { data: fetchAllClubData, isSuccess } = useQuery({
    queryFn: async () => {
      const fetchData = (
        await pb.collection('socialing').getList(1, 10, {
          filter: `createUser = "${userInfo.id}" || confirmUser ?~ "${userInfo.id}" `,
        })
      ).items;
      return fetchData;
    },
    queryKey: ['allClubData', userInfo.id],
  });

  useEffect(() => {
    if (isSuccess) {
      const created = [];
      const confirmed = [];
      fetchAllClubData.forEach((item) => {
        if (item.createUser === userInfo.id) {
          created.push(item);
        } else {
          confirmed.push(item);
        }
      });
      setClubData({ createdClub: created, confirmedClub: confirmed });
    }
  }, [isSuccess, fetchAllClubData, userInfo.id]);

  // 더보기 버튼 클릭시 작동하는 함수
  const handleMoreValue = (e) => {
    if (e.target.name == 'createdClub') {
      setShowQuantity({
        ...showQuantity,
        [e.target.name]: clubData.createdClub.length,
      });
    }
    if (e.target.name == 'confirmedClub') {
      setShowQuantity({
        ...showQuantity,
        [e.target.name]: clubData.confirmedClub.length,
      });
    }
  };

  // 검색창 이벤트 함수
  const handleSearch = (e) => {
    setSearchKeyword(e.target.value);
    setIsSearchState(e.target.value !== '');
  };

  //검색시 실행되는 이펙트 함수
  useEffect(() => {
    const confirmValue = clubData.confirmedClub?.filter((item) =>
      item['title'].includes(debouncedKeyword)
    );
    const createValue = clubData.createdClub?.filter((item) =>
      item['title'].includes(debouncedKeyword)
    );
    setSearchResult({ confirmedClub: confirmValue, createdClub: createValue });
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
          {(clubData.createdClub?.length == 0) &
          (clubData.confirmedClub?.length === 0) ? (
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
                  {isSearchState
                    ? searchResult['confirmedClub']?.map((item) => (
                        <ClubList
                          id={item.id}
                          key={item.id}
                          title={item.title}
                          schedule={calcDay(item.dateTime)}
                          img={getPbImgs(item)}
                        ></ClubList>
                      ))
                    : clubData.confirmedClub
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
                  {!isSearchState &&
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
                  {isSearchState
                    ? searchResult['createdClub']?.map((item) => (
                        <ClubList
                          id={item.id}
                          key={item.id}
                          title={item.title}
                          schedule={calcDay(item.dateTime)}
                          img={getPbImgs(item)}
                        ></ClubList>
                      ))
                    : clubData.createdClub
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
