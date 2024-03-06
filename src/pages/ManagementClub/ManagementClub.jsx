import pb from '@/api/pocketbase';
import {
  Accordion,
  AccordionChidren1,
  NomalTitle,
  TextForm,
} from '@/components/Atoms';
import { DobbleButtonModal, GNB } from '@/components/Molecules';
import { getDocumentTitle, getPbImgs } from '@/utils';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useParams } from 'react-router-dom';

function ManagementClub() {
  const { answer, socialing } = useLoaderData();
  const { clubId } = useParams();
  console.log(answer);
  console.log(socialing);

  useEffect(() => {
    pb.collection('socialing').subscribe(clubId, (e) => {
      console.log(e.action, e.record);
    });
    return () => {
      pb.collection('socialing').unsubscribe(clubId);
    };
  }, [clubId]);

  const handleApprove = (userId) => (e) => {
    console.log(userId);
    console.log(e.target);
    e.preventDefault();
    const Data = { confirmUser: [...socialing.confirmUser, userId] };
    pb.collection('socialing').update(socialing.id, Data);
  };
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle(`${socialing.title} 모임관리`)}</title>
      </Helmet>

      <div className="relative flex min-h-screen w-full flex-col bg-white">
        <NomalTitle backLink path="/">
          소셜링 멤버 관리
        </NomalTitle>
        <main className="mb-[65px] px-4">
          <h2 className="py-4 text-h-2-semibold text-bjblack">질문</h2>
          <TextForm
            type="text"
            hiddenLabel
            value={socialing.query}
            readOnly
            className="mb-4 mt-2"
          >
            질문 내용
          </TextForm>
          <Accordion
            smallText={
              socialing.applicant.length - socialing.confirmUser.length === 0
                ? '아직 신청자가 없습니다.'
                : '신청 후 24시간이 지나면 자동으로 대기가 취소돼요.'
            }
            open
            applicant={
              socialing.applicant.length - socialing.confirmUser.length
            }
          >
            {answer
              .filter(
                (item) =>
                  !item.expand.socialing.confirmUser.includes(item.answerUser)
              )
              .map((item) => {
                console.log(item);
                return (
                  <AccordionChidren1
                    key={item.id}
                    // userId={item.answerUser}
                    src={getPbImgs(item.expand.answerUser)}
                    nickname={item.expand.answerUser.nickname}
                    answer={item.answer}
                    onClick={handleApprove(item.answerUser)}
                  ></AccordionChidren1>
                );
              })}
          </Accordion>
          <Accordion
            open
            limitPerson={socialing.limitPerson}
            confirmUser={socialing.confirmUser.length}
          >
            {socialing.expand.confirmUser.map((item) => (
              <AccordionChidren1
                confirm
                key={item.id}
                src={getPbImgs(item)}
                nickname={item.nickname}
              ></AccordionChidren1>
            ))}
          </Accordion>
        </main>
        <GNB className="fixed" createClub />
      </div>

      {/* 모임 관리 페이지 팝업 1 */}
      <DobbleButtonModal
        title="바기 님의"
        primaryButtonText="네, 수락할게요"
        primaryButtonPath="/"
        secondaryButtonText="취소"
        secondaryButtonPath="/"
      >
        소셜링 참여 신청을 수락하시겠어요?
      </DobbleButtonModal>

      {/* 모임 관리 페이지 팝업 2 */}
      {/* <DobbleButtonModal
        // open
        title="참여인원이 모두 모였어요!"
        primaryButtonText="채팅방으로 이동하기"
        primaryButtonPath="/"
      >
        채팅방에서 이야기 나눠봐요
      </DobbleButtonModal> */}
    </>
  );
}
export const loader = async ({ params }) => {
  const answer = await pb.collection('socialingQueryAnswer').getFullList({
    filter: `socialing ="${params.clubId}"`,
    expand: 'socialing, answerUser',
  });
  const socialing = await pb
    .collection('socialing')
    .getOne(params.clubId, { expand: 'confirmUser' });
  const data = { answer, socialing };
  return data;
};
export default ManagementClub;
