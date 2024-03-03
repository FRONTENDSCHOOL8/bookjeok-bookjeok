import pb from '@/api/pocketbase';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { getPbImgs, getDocumentTitle } from '@/utils';
import { ClubList } from '@/components/Molecules';
import useUserInfoStore from '@/store/useUserInfoStore';
import { NomalTitle, ThinTextForm } from '@/components/Atoms';
import { useDebounce } from '@/hooks';
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

const INITIAL_VALUE = {
  createdClub: 3,
  confirmedClub: 3,
};

function MyClubList() {
  const { userInfo } = useUserInfoStore();
  const [createdClub, setCreatedClub] = useState([]);
  const [confirmedClub, setConfirmedClub] = useState([]);
  const [showValue, setShowValue] = useState(INITIAL_VALUE);

  const [isSearchState, setIsSearchState] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState();
  const [searchResult, setSearchResult] = useState();
  const debouncedKeyword = useDebounce(searchKeyword, 500);
  // 데이터 불러오는 이펙트 함수
  useEffect(() => {
    const fetchPb = async () => {
      try {
        pb.autoCancellation(false);
        const data = (
          await pb.collection('socialing').getList(1, 10, {
            filter: `createUser = "${userInfo.id}" || confirmUser ?~ "${userInfo.id}" `,
          })
        ).items;
        const created = [];
        const confirmed = [];
        data.forEach((item) => {
          if (item.createUser === userInfo.id) {
            created.push(item);
          } else {
            confirmed.push(item);
          }
        });
        setCreatedClub(created);
        setConfirmedClub(confirmed);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPb();
  }, [userInfo]);

  // 더보기 버튼 클릭시 작동하는 함수
  const handleMoreValue = (e) => {
    if (e.target.name == 'createdClub') {
      setShowValue({ ...showValue, [e.target.name]: createdClub.length });
    }
    if (e.target.name == 'confirmedClub') {
      setShowValue({ ...showValue, [e.target.name]: confirmedClub.length });
    }
  };

  // 검색창 이벤트 함수
  const handleSearch = (e) => {
    setSearchKeyword(e.target.value);
    if (searchKeyword === '') {
      setIsSearchState(false);
    } else {
      setIsSearchState(true);
    }
  };

  //검색시 실행되는 이펙트 함수
  useEffect(() => {
    const confirmValue = confirmedClub.filter((item) =>
      item['title'].includes(debouncedKeyword)
    );
    console.log(confirmValue);
    const createValue = createdClub.filter((item) =>
      item['title'].includes(debouncedKeyword)
    );
    setSearchResult({ confirmedClub: confirmValue, createdClub: createValue });
  }, [debouncedKeyword]);

  console.log(searchResult);
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('나의 모임 리스트')}</title>
      </Helmet>
      <div>
        <NomalTitle backLink>모임 리스트</NomalTitle>
        <ThinTextForm
          onChange={handleSearch}
          backLink
          type="search"
          placeholder="search"
        />
        <ul>
          <p>참여중인 모임</p>
          {isSearchState
            ? searchResult['confirmedClub'].map((item) => (
                <ClubList
                  key={item.id}
                  title={item.title}
                  schedule={item.dateTime}
                  img={getPbImgs(item)}
                ></ClubList>
              ))
            : confirmedClub
                .slice(0, showValue.confirmedClub)
                .map((item) => (
                  <ClubList
                    key={item.id}
                    title={item.title}
                    schedule={item.dateTime}
                    img={getPbImgs(item)}
                  ></ClubList>
                ))}
          {confirmedClub.length > showValue.confirmedClub ? (
            <button name="confirmedClub" onClick={handleMoreValue}>
              더 보기
            </button>
          ) : (
            ''
          )}
        </ul>
        <ul>
          <p>내가 만든 모임</p>
          {isSearchState
            ? searchResult['createdClub'].map((item) => (
                <ClubList
                  key={item.id}
                  title={item.title}
                  schedule={item.dateTime}
                  img={getPbImgs(item)}
                ></ClubList>
              ))
            : createdClub
                .slice(0, showValue.createdClub)
                .map((item) => (
                  <ClubList
                    key={item.id}
                    title={item.title}
                    schedule={item.dateTime}
                    img={getPbImgs(item)}
                  ></ClubList>
                ))}
          {showValue.createdClub < createdClub.length ? (
            <button name="createdClub" onClick={handleMoreValue}>
              더 보기
            </button>
          ) : (
            ''
          )}
        </ul>
      </div>
    </>
  );
}

export default MyClubList;
