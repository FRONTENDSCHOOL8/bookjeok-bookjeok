import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';
import {
  NomalTitle,
  MainButton,
  RoundImage,
  Textarea,
} from '@/components/Atoms';
import { Svg } from '@/components/Atoms';
import { useLoaderData } from 'react-router-dom';

/*
1. 호스트 (모임 생성자)의 프로필사진 
  모임 가입시 질문
2. socialingQueryAnswer-> clubid, 답변자, 답변
  socialing -> 해당하는 club에 applicant에 답변자 적재
3.  


*/

export async function loader({ params }) {
  const socialingId = params;
  console.log(socialingId);
  return { socialingId };
}

function ApplicationClub1() {
  const { socialingId } = useLoaderData();

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('모임 신청하기')}</title>
      </Helmet>
      <div>
        <NomalTitle backLink subText="1 of 2">
          모임신청
        </NomalTitle>
        <RoundImage size="md" />
        <div>
          <p>참가자들을 존중해주실거죠?</p>
          <span>작성한 답변은 호스트와 스태프에게만 공개돼요.</span>
        </div>
        <Textarea></Textarea>
        <Svg id="subsctract" color="bjred-400" />
        <p>
          전화번호, 카카오톡 아이디, 신청폼 작성 요구 등 과도한 개인 정보를
          요구하는 경우 가이드 위반 모임이므로 고객센터에 신고해주세요.
        </p>
        <MainButton>모임 신청하기</MainButton>
      </div>
    </>
  );
}

export default ApplicationClub1;
