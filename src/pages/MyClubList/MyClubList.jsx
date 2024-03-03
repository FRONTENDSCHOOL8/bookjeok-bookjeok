import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { ClubList } from '@/components/Molecules';
import { NomalTitle, ThinTextForm } from '@/components/Atoms';
import useUserInfoStore from '@/store/useUserInfoStore';
import { useEffect, useState } from 'react';
import pb from '@/api/pocketbase';
import { getPbImgs } from '@/utils';
/*
1. socialing db에서 applicant가 사용자인 경우, 
  creator가 나인 경우를 분리하여 렌더링
2. 3개이상인 경우 더보기 버튼 =>  
  일단 3개가 초기 값인 상태를 보여줌......
  더보기 버튼을 누르면 전체 길이로 상태변경 이게되나?

3. 
*/

function MyClubList() {
  const { userInfo } = useUserInfoStore();
  const [createdClub, setCreatedClub] = useState([]);
  const [confirmedClub, setConfirmedClub] = useState([]);

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

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('나의 모임 리스트')}</title>
      </Helmet>
      <div>
        <NomalTitle backLink={true}>모임 리스트</NomalTitle>
        <ThinTextForm backLink={true} type="search" placeholder="search" />
        <ul>
          <p>참여중인 모임</p>
          {confirmedClub.map((item) => (
            <ClubList
              key={item.id}
              title={item.title}
              schedule={item.dateTime}
              img={getPbImgs(item)}
            ></ClubList>
          ))}
          {confirmedClub.length > 3 ? <button>더 보기</button> : ''}
        </ul>
        <ul>
          <p>내가 만든 모임</p>
          {createdClub.map((item) => (
            <ClubList
              key={item.id}
              title={item.title}
              schedule={item.dateTime}
              img={getPbImgs(item)}
            ></ClubList>
          ))}
          {confirmedClub.length > 3 ? <button>더 보기</button> : ''}
        </ul>
      </div>
    </>
  );
}

export default MyClubList;
