import pb from '@/api/pocketbase';
import { getDocumentTitle, getPbImgs } from '@/utils';
import { Helmet } from 'react-helmet-async';
import {
  NomalTitle,
  MainButton,
  RoundImage,
  Textarea,
} from '@/components/Atoms';
import { Svg } from '@/components/Atoms';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import useUserInfoStore from '@/store/useUserInfoStore';
import { DobbleButtonModal } from '@/components/Molecules';

/*
1. 호스트 (모임 생성자)의 프로필사진 (users)모임 가입시 질문(socialing)
2. socialingQueryAnswer-> clubid, 답변자, 답변
  socialing -> 해당하는 club에 applicant에 답변자 적재
3. onChange시 하단의 length 가 변경되어야됨. 
  10자 이상이어야 버튼 활성화 
4. users, socialing DB에 적재 
*/

export async function loader({ params }) {
  const { clubId } = params;
  const club = await pb
    .collection('socialing')
    .getOne(clubId, { expand: ' createUser' });
  const profile = await pb.collection('users').getOne(club.createUser);
  if (profile.img) {
    const profilePhoto = getPbImgs(profile);
    return { club, profilePhoto };
  }
  return { club };
}

function ApplicationClub2() {
  const { club, profilePhoto } = useLoaderData();
  const { userInfo } = useUserInfoStore((state) => state);
  const [answerForm, setAnswerForm] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  // 답변 폼
  const handleAnswerForm = (e) => {
    setAnswerForm(e.target.value);
  };

  //제출 버튼
  const handleSubmit = (e) => {
    e.preventDefault();
    if (answerForm) {
      const answerData = {
        socialing: club.id,
        answerUser: userInfo.id,
        answer: answerForm,
      };
      pb.collection('socialingQueryAnswer')
        .create(answerData)
        .then(() => {
          const updateData = { participantSocialing: [`${club.id}`] };
          pb.collection('users').update(userInfo.id, updateData);
        })
        .then(() => {
          const updateData = {
            applicant: [...club.applicant, `${userInfo.id}`],
          };
          pb.collection('socialing').update(club.id, updateData);
          setIsSuccess(true);
          setIsOpenModal(true);
        })
        .catch((Error) => console.error(Error));
    }
  };
  console.log(isSuccess);
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('모임 신청하기')}</title>
      </Helmet>
      <div className="flex h-dvh h-screen flex-col p-4 ">
        <NomalTitle backLink subText="2 of 2">
          모임신청
        </NomalTitle>
        <div className="flex gap-4 ">
          <RoundImage size="md" src={profilePhoto} />
          <div>
            <p className="text-b-1-regular">{club.query}</p>
            <span className="text-b-2-regular text-bjgray-500">
              작성한 답변은 호스트와 스태프에게만 공개돼요.
            </span>
          </div>
        </div>
        <Textarea
          onChange={handleAnswerForm}
          placeholder={'내용을 입력해 주세요. (10자 이상)'}
          maxLength={200}
          length={answerForm.length}
          className="py-3"
        ></Textarea>
        <div className="flex items-center justify-center gap-4 text-bjred-400">
          <Svg size={24} id="subsctract" color="bjred-400" />
          <p className="m-[13.5px] text-b-1-regular text-bjred-400">
            전화번호, 카카오톡 아이디, 신청폼 작성 요구 등 과도한 개인 정보를
            요구하는 경우 가이드 위반 모임이므로 고객센터에 신고해주세요.
          </p>
        </div>
        {isSuccess ? (
          <DobbleButtonModal
            open={isOpenModal}
            title="모임 신청이 완료되었습니다."
            primaryButtonText="홈으로"
            primaryButtonPath="/mainClub"
          >
            호스트의 수락을 기다려주세요
          </DobbleButtonModal>
        ) : (
          ''
        )}

        <div className="mt-auto ">
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
      </div>
    </>
  );
}

export default ApplicationClub2;
