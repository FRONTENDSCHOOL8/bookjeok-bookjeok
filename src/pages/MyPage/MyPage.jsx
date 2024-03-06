import { Accordion, NomalTitle } from '@/components/Atoms';
import { Avatar, ClubList, GNB } from '@/components/Molecules';
import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';
import useUserInfoStore from '@/store/useUserInfoStore';
import { useEffect } from 'react';
import pb from '@/api/pocketbase';
/*
1. userInfo에 있는 createSocialing, participantSocialing 
  배열에 있는 모임 id를 어떻게 가져올까...
  그냥 confirmUser, createUser에 사용자 id 있음 다 가져오고 
  렌더링할때 creteSocialing에 모임 id가 있음 만든모임에 두고 confirm user에 있으면 참여한 모임으로 렌더링하구 

2. 로그아웃 기능 구현   
  useUserInfoStore에서 deleteUserInfo
3. 프로필 사진 수정 기능 구현

*/
function MyPage() {
  const {
    userInfo: { createSocialing, participantSocialing },
  } = useUserInfoStore((state) => state);

  useEffect(() => {
    pb.collection('socialing').getFullList('', { filter: '' });
  }, [participantSocialing, createSocialing]);

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('마이페이지')}</title>
      </Helmet>
      <div className="relative flex h-screen w-full flex-col">
        <NomalTitle backLink path="/">
          마이페이지
        </NomalTitle>
        <main className="px-4">
          <div className="relative mb-5 mt-12">
            <Avatar
              nickName="닉네임"
              text="나의 활동"
              className="relative !top-0"
            ></Avatar>
          </div>
          <hr />

          <Accordion open mainText="참여중인 모임" className="mb-4">
            <ul className="flex flex-col gap-y-4">
              <ClubList
                id="efweews"
                title="[2030 모임] 돈의 속성"
                schedule="3.16(토) 오후 2:00"
                img="https://shopping-phinf.pstatic.net/main_3244093/32440930635.20230516105639.jpg"
              ></ClubList>
              <ClubList
                id="QWtgwqoijpr"
                title="[2030 모임] 돈의 속성"
                schedule="3.16(토) 오후 2:00"
                img="https://shopping-phinf.pstatic.net/main_3244093/32440930635.20230516105639.jpg"
              ></ClubList>
            </ul>
          </Accordion>

          <Accordion open mainText="주최중인 모임" className="mb-4">
            <ul className="flex flex-col gap-y-4">
              <ClubList
                id="qwtoijrpo"
                title="[2030 모임] 돈의 속성"
                schedule="3.16(토) 오후 2:00"
                img="https://shopping-phinf.pstatic.net/main_3244093/32440930635.20230516105639.jpg"
              ></ClubList>
            </ul>
          </Accordion>
        </main>
        <GNB createClub className="mt-auto" />
      </div>
    </>
  );
}

export default MyPage;
