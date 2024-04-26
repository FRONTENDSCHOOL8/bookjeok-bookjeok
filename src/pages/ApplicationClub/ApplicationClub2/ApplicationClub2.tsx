import {
  MainButton,
  NomalTitle,
  RoundImage,
  Svg,
  Textarea,
} from '@/components/Atoms';
import { useState } from 'react';
import pb from '@/api/pocketbase';
import { LoaderType } from './loader';
import { useCloseModal } from '@/hooks';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import useUserInfoStore from '@/store/useUserInfoStore';
import { getDocumentTitle, createRandomId } from '@/utils';
import { DobbleButtonModal } from '@/components/Molecules';

/*
1. 호스트 (모임 생성자)의 프로필사진 (users)모임 가입시 질문(socialing)
2. socialingQueryAnswer-> clubid, 답변자, 답변
  socialing -> 해당하는 club에 applicant에 답변자 적재
3. onChange시 하단의 length 가 변경되어야됨. 
  10자 이상이어야 버튼 활성화 
4. users, socialing DB에 적재 
*/
interface SubmitType {
  (e: React.MouseEvent<HTMLButtonElement>): void;
}

export function ApplicationClub2() {
  const { club, profilePhoto } = useLoaderData() as LoaderType;
  const { userInfo } = useUserInfoStore((state) => state);
  const [answerForm, setAnswerForm] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  useCloseModal(isOpenModal, () => {
    setIsOpenModal(false);
  });

  // 답변 폼
  const handleAnswerForm = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setAnswerForm(e.target.value);
  };

  //제출 버튼
  const handleSubmit: SubmitType = (e) => {
    e.preventDefault();
    if (!isOpenModal && answerForm) {
      const answerData = {
        id: createRandomId(),
        socialing: club.id,
        answerUser: userInfo?.id,
        answer: answerForm,
      };
      pb.collection('socialingQueryAnswer')
        .create(answerData)
        .then(() => {
          const updateData = {
            participantSocialing: [
              ...userInfo!.participantSocialing,
              `${club.id}`,
            ],
          };
          pb.collection('users').update(userInfo!.id, updateData);
        })
        .then(() => {
          const updateData = {
            answer: [...club.answer, `${answerData.id}`],
            applicant: [...club.applicant, `${userInfo!.id}`],
          };
          pb.collection('socialing').update(club.id, updateData);
          setIsSuccess(true);
          setIsOpenModal(true);
        })
        .catch((Error) => console.error(Error));
    }
  };

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('모임 신청하기')}</title>
      </Helmet>
      <div className="flex min-h-svh flex-col">
        <NomalTitle backLink subText="2 of 2">
          모임신청
        </NomalTitle>
        <main className="flex flex-grow flex-col px-4 pt-4">
          <div className="flex-grow">
            <div className="flex gap-4 pt-2">
              <RoundImage size="md" src={profilePhoto!} />
              <div>
                <p className="text-b-1-regular">{club.query}</p>
                <span className="text-b-2-regular text-bjgray-500">
                  작성한 답변은 호스트와 스태프에게만 공개돼요.
                </span>
              </div>
            </div>
            <Textarea
              id="socialingAnswer"
              label="모입 신청 질문에 대한 답변"
              onChange={handleAnswerForm}
              placeholder={'내용을 입력해 주세요. (10자 이상)'}
              maxLength={200}
              length={answerForm.length}
              className="py-3"
            ></Textarea>
            <div className="flex items-center justify-center gap-4 text-bjred-400">
              <Svg
                size={24}
                id="subsctract"
                color="bjred-400"
                className="shrink-0"
              />
              <p className="break-keep text-b-1-regular text-bjred-400">
                전화번호, 카카오톡 아이디, 신청폼 작성 요구 등 과도한 개인
                정보를 요구하는 경우 가이드 위반 모임이므로 고객센터에
                신고해주세요.
              </p>
            </div>
          </div>
          {isSuccess ? (
            <DobbleButtonModal
              open={isOpenModal}
              title="모임 신청이 완료되었습니다."
              primaryButtonText="홈으로"
              primaryButtonPath="/main/club"
            >
              호스트의 수락을 기다려주세요
            </DobbleButtonModal>
          ) : (
            ''
          )}
          <div className="my-4 mt-auto">
            <MainButton
              className={
                answerForm.length > 10
                  ? `pointer-events-auto`
                  : `pointer-events-none`
              }
              onClick={handleSubmit}
              color={answerForm.length > 10 ? 'primary' : 'secondary'}
            >
              모임 신청하기
            </MainButton>
          </div>
        </main>
      </div>
    </>
  );
}
