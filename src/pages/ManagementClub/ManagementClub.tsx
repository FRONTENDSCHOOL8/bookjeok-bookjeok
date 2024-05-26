import pb from '@/api/pocketbase';
import {
  Accordion,
  AccordionChidren1,
  MainButton,
  NomalTitle,
  TextBox,
} from '@/components/Atoms';
import { GNB } from '@/components/Molecules';
import useLoaderData from '@/hooks/useLoaderData';
import {
  ApproveUserModal,
  CancelUserModal,
  CompleteDeleteModal,
  CompleteModal,
  DeleteModal,
  FailModal,
  TExpandedSocialingQueryAnswer,
  Texpand,
  fetchManagement,
} from '@/pages/ManagementClub';
import { SocialingResponse, UsersResponse } from '@/types/pocketbase-types';
import { getDocumentTitle, getPbImgs } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import * as React from 'react';
import { useLayoutEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, useRevalidator } from 'react-router-dom';

const DEFAULT_MODAL_STATE = {
  failModal: false,
  approveModal: false,
  cancelModal: false,
  completeModal: false,
  deleteModal: false,
  completeDeleteModal: false,
};

export function ManagementClub() {
  const [modalState, setModalState] = useState(DEFAULT_MODAL_STATE);
  const [activeApproveUser, setActiveApproveUser] = useState<
    { nickname: string; id: string } | UsersResponse
  >({
    nickname: '',
    id: '',
  });

  const [activeCancelUser, setActiveCancelUser] = useState<
    { nickname: string; id: string } | UsersResponse
  >({ nickname: '', id: '' });

  const revalidator = useRevalidator();

  const { clubId } = useParams();
  const initSocialing = useLoaderData<SocialingResponse<Texpand>>();
  const { applicant, confirmUser, answer, chattingRoom } =
    initSocialing.expand as Texpand;

  const { data: socialing } = useQuery({
    queryKey: ['socialing', clubId],
    queryFn: () => fetchManagement(clubId!),
    initialData: initSocialing,
  });

  // 모달을 위한 핸들러 함수
  const handleApproveButtonInModal =
    (userId: string) => async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      if (socialing.limitPerson === socialing.confirmUser.length) {
        setModalState({ ...modalState, approveModal: false, failModal: true });
        return;
      }

      const applicant = socialing.applicant.filter(
        (item: string) => item !== userId
      );

      const Data = {
        confirmUser: [...socialing.confirmUser, userId],
        applicant,
      };

      await pb.collection('socialing').update(socialing.id, Data);

      // 타입 가드(보호)
      // - chattingRoom 값이 undefined일 가능성 배제
      if (chattingRoom) {
        await pb
          .collection('chattingRoom')
          .update(chattingRoom.id, { users: [...chattingRoom.users, userId] });
      }

      revalidator.revalidate();

      setModalState({ ...modalState, approveModal: false });
    };

  const handleApproveButton =
    (user: TExpandedSocialingQueryAnswer) =>
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setModalState({ ...modalState, approveModal: true });
      if (user.expand) {
        setActiveApproveUser(user.expand.answerUser);
      }
    };

  const handleCancleButtonInModal =
    (userId: string) => async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const confirmUser = socialing.confirmUser.filter(
        (item: string) => item !== userId
      );
      const Data = {
        confirmUser,
        applicant: [...socialing.applicant, userId],
      };
      await pb.collection('socialing').update(socialing.id, Data);
      revalidator.revalidate();
      setModalState({ ...modalState, cancelModal: false });
    };
  const handelCancelButton =
    (user: UsersResponse) => (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setModalState({ ...modalState, cancelModal: true });
      setActiveCancelUser(user);
    };

  const handleCloseButton = (modal: keyof typeof DEFAULT_MODAL_STATE) => {
    return (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setModalState((prevState) => ({
        ...prevState,
        [modal]: false,
      }));
    };
  };

  const handleDeleteButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setModalState({ ...modalState, deleteModal: true });
  };

  const handleDeleteButtonInModal = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    await pb.collection('socialing').delete(socialing.id);
    await pb.collection('chattingRoom').delete(chattingRoom?.id!);
    setModalState({ ...modalState, completeDeleteModal: true });
  };

  useLayoutEffect(() => {
    pb.collection('socialing').subscribe(socialing.id, (e) => {
      if (e.record.confirmUser.length === socialing.limitPerson) {
        setModalState({ ...modalState, completeModal: true });
      }
    });
    return () => {
      pb.collection('socialing').unsubscribe(socialing.id);
    };
  }, [modalState, socialing.confirmUser, socialing.id, socialing.limitPerson]);

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle(`${socialing.title} 모임관리`)}</title>
      </Helmet>

      <div className="relative flex min-h-svh w-full flex-col bg-white">
        <NomalTitle backLink>소셜링 멤버 관리</NomalTitle>
        <main className="mb-[65px] px-4">
          <h2 className="py-4 text-h-2-semibold text-bjblack">질문</h2>
          <TextBox className='mb-4'>{socialing.query}</TextBox>
          <Accordion
            smallText={
              applicant === undefined
                ? '아직 신청자가 없습니다.'
                : '승인을 하면 자동으로 채팅방에 초대됩니다.'
            }
            open
            applicant={applicant === undefined ? '0' : applicant.length}
          >
            {answer
              ?.filter(
                (item) =>
                  !item.expand?.socialing.confirmUser.includes(item.answerUser)
              )
              .map((item) => {
                return (
                  <AccordionChidren1
                    key={item.id}
                    src={getPbImgs(item.expand?.answerUser)}
                    nickname={item.expand?.answerUser.nickname}
                    answer={item.answer}
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
            {confirmUser?.map((item) => {
              return (
                <AccordionChidren1
                  key={item.id}
                  src={getPbImgs(item)}
                  nickname={item.nickname}
                  onClick={handelCancelButton(item)}
                  confirmed
                ></AccordionChidren1>
              );
            })}
          </Accordion>
          <MainButton
            color="warning"
            type="button"
            onClick={handleDeleteButton}
            className="mt-10"
          >
            모임 삭제하기
          </MainButton>
        </main>
        <GNB className="fixed" createClub />
      </div>

      <ApproveUserModal
        title={activeApproveUser.nickname}
        open={modalState.approveModal}
        onClickCancel={handleCloseButton('approveModal')}
        primaryOnClick={handleApproveButtonInModal(activeApproveUser.id)}
        secondaryOnClick={handleCloseButton('approveModal')}
      />
      <CancelUserModal
        title={activeCancelUser.nickname}
        onClickCancel={handleCloseButton('cancelModal')}
        open={modalState.cancelModal}
        primaryOnClick={handleCancleButtonInModal(activeCancelUser.id)}
        secondaryOnClick={handleCloseButton('cancelModal')}
      />
      <FailModal
        open={modalState.failModal}
        onClickCancel={handleCloseButton('failModal')}
        primaryButtonPath={chattingRoom?.id}
      />
      <CompleteModal
        open={modalState.completeModal}
        onClickCancel={handleCloseButton('completeModal')}
        primaryButtonPath={chattingRoom?.id}
      />

      <DeleteModal
        open={modalState.deleteModal}
        onClickCancel={handleCloseButton('deleteModal')}
        primaryOnClick={handleDeleteButtonInModal}
        secondaryOnClick={handleCloseButton('deleteModal')}
      />
      <CompleteDeleteModal open={modalState.completeDeleteModal} />
    </>
  );
}
