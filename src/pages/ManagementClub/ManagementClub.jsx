import pb from '@/api/pocketbase';
import {
  Accordion,
  AccordionChidren1,
  NomalTitle,
  TextForm,
} from '@/components/Atoms';
import { DobbleButtonModal, GNB } from '@/components/Molecules';
import { getDocumentTitle, getPbImgs } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { useRevalidator } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';

export function ManagementClub() {
  const {
    socialing,
    socialing: {
      expand: { applicant, confirmUser, answer },
    },
  } = useLoaderData();

  console.log('socialing', socialing);
  console.log('answer', answer);
  console.log('applicant', applicant);
  console.log('confirmUser', confirmUser);

  // useEffect(() => {
  //   pb.collection('socialing').subscribe(clubId, (e) => {
  //     console.log(e.action, e.record);
  //   });
  //   return () => {
  //     pb.collection('socialing').unsubscribe(clubId);
  //   };
  // }, [clubId]);
  const revalidator = useRevalidator();

  const handleApprove = (userId) => async (e) => {
    e.preventDefault();
    if (socialing.limitPerson === socialing.confirmUser.length) {
      return alert('이미 인원이 가득 찼습니다.');
    }
    const appData = socialing.applicant.filter((item) => item !== userId);
    const Data = {
      confirmUser: [...socialing.confirmUser, userId],
      applicant: appData,
    };
    const res = await pb.collection('socialing').update(socialing.id, Data);
    console.log(res);
    revalidator.revalidate();
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
              applicant === undefined
                ? '아직 신청자가 없습니다.'
                : '신청 후 24시간이 지나면 자동으로 대기가 취소돼요.'
            }
            open
            applicant={applicant === undefined ? '0' : applicant.length}
          >
            {answer === undefined
              ? ''
              : answer
                  .filter(
                    (item) =>
                      !item.expand.socialing.confirmUser.includes(
                        item.answerUser
                      )
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
            smallText={confirmUser ? '' : '아직 승인한 신청자가 없습니다.'}
          >
            {confirmUser === undefined
              ? ''
              : confirmUser.map((item) => (
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
