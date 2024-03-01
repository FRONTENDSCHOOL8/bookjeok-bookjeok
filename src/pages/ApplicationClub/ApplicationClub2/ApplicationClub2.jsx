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
  console.log(profile);
  const profilePhoto = getPbImgs(profile);
  return { club, profile, profilePhoto };
}

function ApplicationClub1() {
  const { club, profile, profilePhoto } = useLoaderData();
  console.log(club, profile, profilePhoto);

  const [answerForm, setAnswerForm] = useState('');

  // 답변 폼
  const handleAnswerForm = (e) => {
    setAnswerForm(e.target.value);
  };

  //제출 버튼
  const handleSubmit = () => {
    const answerData = {
      socialing: club.id,
      answerUser: profile.id,
      answer: answerForm,
    };
    pb.collection('socialingQueryAnswer')
      .create(answerData)
      .then(() =>
        pb.collection('users').update('participantSocialing', club.id)
      )
      .catch((Error) => console.error(Error));
  };

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('모임 신청하기')}</title>
      </Helmet>
      <div>
        <NomalTitle backLink subText="1 of 2">
          모임신청
        </NomalTitle>
        <RoundImage size="md" src={profilePhoto} />
        <div>
          <p>{club.query}</p>
          <span>작성한 답변은 호스트와 스태프에게만 공개돼요.</span>
        </div>
        <Textarea
          onChange={handleAnswerForm}
          placeholder={'내용을 입력해 주세요(최소 10자 이상)'}
          maxLength={200}
          //믿을수가없어.... debounce를 걸면 바로바로 몇글잔지 안보이잖아..
          //
          length={answerForm.length}
        ></Textarea>
        <Svg id="subsctract" color="bjred-400" />
        <p>
          전화번호, 카카오톡 아이디, 신청폼 작성 요구 등 과도한 개인 정보를
          요구하는 경우 가이드 위반 모임이므로 고객센터에 신고해주세요.
        </p>
        <MainButton onClick={handleSubmit}>모임 신청하기</MainButton>
      </div>
    </>
  );
}

export default ApplicationClub1;
