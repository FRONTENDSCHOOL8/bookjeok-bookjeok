import { Accordion, NomalTitle } from '@/components/Atoms';
import { Avatar, ClubList, GNB } from '@/components/Molecules';
import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';

function MyPage() {
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
                title="[2030 모임] 돈의 속성"
                schedule="3.16(토) 오후 2:00"
                img="https://shopping-phinf.pstatic.net/main_3244093/32440930635.20230516105639.jpg"
              ></ClubList>
              <ClubList
                title="[2030 모임] 돈의 속성"
                schedule="3.16(토) 오후 2:00"
                img="https://shopping-phinf.pstatic.net/main_3244093/32440930635.20230516105639.jpg"
              ></ClubList>
            </ul>
          </Accordion>

          <Accordion open mainText="주최중인 모임" className="mb-4">
            <ul className="flex flex-col gap-y-4">
              <ClubList
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
