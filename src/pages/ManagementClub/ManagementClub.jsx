import pb from '@/api/pocketbase';
import {
  Accordion,
  AccordionChidren1,
  NomalTitle,
  TextForm,
} from '@/components/Atoms';
import { ButtonModalForManageMent, GNB } from '@/components/Molecules';
import { getDocumentTitle, getPbImgs } from '@/utils';
import { useLayoutEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useRevalidator } from 'react-router-dom';

const DEFAULT_MODAL_STATE = {
  failModal: false,
  approveModal: false,
  cancelModal: false,
  completeModal: false,
};
export function ManagementClub() {
  const [modalState, setModalState] = useState(DEFAULT_MODAL_STATE);
  const [activeApproveUser, setActiveApproveUser] = useState('');
  const [activeCancelUser, setActiveCancelUser] = useState('');
  const revalidator = useRevalidator();

  const {
    socialing,
    socialing: {
      expand: { applicant, confirmUser, answer, chattingRoom },
    },
  } = useLoaderData();

  const handleApproveButtonInModal = (userId) => async (e) => {
    e.preventDefault();
    if (socialing.limitPerson === socialing.confirmUser.length) {
      setModalState({ ...modalState, approveModal: false, failModal: true });
      return;
    }
    const applicant = socialing.applicant.filter((item) => item !== userId);
    const Data = {
      confirmUser: [...socialing.confirmUser, userId],
      applicant,
    };
    await pb.collection('socialing').update(socialing.id, Data);
    await revalidator.revalidate();
    setModalState({ ...modalState, approveModal: false });
  };
  const handleApproveButton = (user) => (e) => {
    e.preventDefault();
    setModalState({ ...modalState, approveModal: true });
    setActiveApproveUser(user.expand.answerUser);
  };

  const handleCancleButtonInModal = (userId) => async (e) => {
    e.preventDefault();
    const confirmUser = socialing.confirmUser.filter((item) => item !== userId);
    const Data = {
      confirmUser,
      applicant: [...socialing.applicant, userId],
    };
    await pb.collection('socialing').update(socialing.id, Data);
    revalidator.revalidate();
    setModalState({ ...modalState, cancelModal: false });
  };
  const handelCancelButton = (user) => (e) => {
    e.preventDefault();
    setModalState({ ...modalState, cancelModal: true });
    setActiveCancelUser(user);
  };
  // 작동이 안됌 ㅜㅠ
  useLayoutEffect(() => {
    pb.collection('socialing').subscribe(socialing.id, (e) => {
      // console.log(e.record.confirmUser.length === socialing.limitPerson);
      if (e.record.confirmUser.length === socialing.limitPerson) {
        setModalState({ ...modalState, completeModal: true });
      }
    });
    return () => {
      pb.collection('socialing').unsubscribe(socialing.id);
    };
  }, [modalState, socialing.confirmUser, socialing.limitPerson]);

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
                : '승인을 하면 자동으로 채팅방에 초대됩니다.'
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
                    return (
                      <AccordionChidren1
                        key={item.id}
                        src={getPbImgs(item.expand.answerUser)}
                        nickname={item.expand.answerUser.nickname}
                        answer="안녕하세요"
                        onClick={handleApproveButton(item)}
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
                    key={item.id}
                    src={getPbImgs(item)}
                    nickname={item.nickname}
                    onClick={handelCancelButton(item)}
                    confirmed
                  ></AccordionChidren1>
                ))}
          </Accordion>
        </main>
        <GNB className="fixed" createClub />
      </div>

      {/* 승인버튼 모달 */}
      <ButtonModalForManageMent
        title={`${activeApproveUser.nickname}님의 신청을 승인하시겠습니까?`}
        closeButton
        primaryAs="button"
        secondaryAs="button"
        onClickCancel={() => {
          setModalState({ ...modalState, approveModal: false });
        }}
        primaryOnClick={handleApproveButtonInModal(activeApproveUser.id)}
        open={modalState.approveModal}
        primaryButtonText="승인"
        secondaryOnClick={() => {
          setModalState({ ...modalState, approveModal: false });
        }}
        secondaryButtonText="취소"
      >
        신청을 승인하면 모임 채팅방에 초대됩니다.
      </ButtonModalForManageMent>

      {/* 승인취소버튼 모달 */}
      <ButtonModalForManageMent
        title={`${activeCancelUser.nickname}님의 승인을 취소하시겠습니까?`}
        closeButton
        primaryAs="button"
        secondaryAs="button"
        onClickCancel={() => {
          setModalState({ ...modalState, cancelModal: false });
        }}
        open={modalState.cancelModal}
        primaryOnClick={handleCancleButtonInModal(activeCancelUser.id)}
        primaryButtonText="취소"
        secondaryOnClick={() => {
          setModalState({ ...modalState, cancelModal: false });
        }}
        secondaryButtonText="닫기"
      >
        특별한 사유없이 승인을 취소하면
        <br />
        불이익이 있을 수 있습니다.
      </ButtonModalForManageMent>
      {/* 인원추가 실패 모달 */}
      <ButtonModalForManageMent
        open={modalState.failModal}
        onClickCancel={() => {
          setModalState({ ...modalState, failModal: false });
        }}
        closeButton
        title="더이상 승인할 수 없어요!"
        primaryButtonText="채팅방으로 이동하기"
        primaryButtonPath={`/chatRoom/${chattingRoom.id}`}
      >
        이미 승인가능한 인원이 모두 찼어요.
      </ButtonModalForManageMent>
      {/* 인원모집완료 모달 */}
      <ButtonModalForManageMent
        open={modalState.completeModal}
        onClickCancel={() => {
          setModalState({ ...modalState, completeModal: false });
        }}
        closeButton
        title="축하합니다!"
        primaryButtonText="채팅방으로 이동하기"
        primaryButtonPath={`/chatRoom/${chattingRoom.id}`}
      >
        모든 모임인원이 찼어요!
        <br />
        채팅방에서 참여자들에게 모임안내를 해주세요.
      </ButtonModalForManageMent>
    </>
  );
}
