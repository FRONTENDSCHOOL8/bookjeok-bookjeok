import { Accordion, NomalTitle, TextForm } from '@/components/Atoms';
import { DobbleButtonModal, GNB } from '@/components/Molecules';
import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';

function ManagementClub() {
  return (
    <>
      <Helmet>
        <title>
          {getDocumentTitle('이곳에 모임 이름을 받아서 넣어줘야하지 않을까요?')}
        </title>
      </Helmet>

      <div className="relative flex h-screen w-full flex-col">
        <NomalTitle backLink path="/">
          소셜링 멤버 관리
        </NomalTitle>
        <main className="px-4">
          <h2 className="py-4 text-h-2-semibold text-bjblack">질문</h2>
          <TextForm
            type="text"
            hiddenLabel
            value="모임에 참석하기 전에 책을 읽어오셔야 돼요 !"
            readOnly
            className="mb-4 mt-2"
          >
            질문 내용
          </TextForm>
          <Accordion
            smallText="신청 후 24시간이 지나면 자동으로 대기가 취소돼요."
            open
            src="/public/defaultProfile.webp"
            nickname="바기"
            text="오백년 전에 이미 읽었습니다. . . "
          >
            참여 대기 멤버 <span className="text-bjred-400">2</span>명 참여
          </Accordion>
          <Accordion
            src="/public/defaultProfile.webp"
            nickname="쭈니"
            text="당연하죠 ㅎ"
          >
            확정 멤버 4명 중 <span className="text-bjgray-500">0</span>명
          </Accordion>
        </main>
      </div>
      <GNB createClub />

      {/* 모임 관리 페이지 팝업 1 */}
      <DobbleButtonModal
        open
        title="바기 님의"
        primaryButtonText="네, 수락할게요"
        primaryButtonPath="/"
        secondaryButtonText="취소"
        secondaryButtonPath="/"
      >
        소셜링 참여 신청을 수락하시겠어요?
      </DobbleButtonModal>

      {/* 모임 관리 페이지 팝업 2 */}
      <DobbleButtonModal
        // open
        title="참여인원이 모두 모였어요!"
        primaryButtonText="채팅방으로 이동하기"
        primaryButtonPath="/"
      >
        채팅방에서 이야기 나눠봐요
      </DobbleButtonModal>
    </>
  );
}

export default ManagementClub;
