import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { NomalTitle, CheckboxForm, MainButton } from '@/components/Atoms';
import { Svg } from '@/components/Atoms';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

export async function loader({ params }) {
  const socialingId = params;
  return { socialingId };
}

function ApplicationClub1() {
  const { socialingId } = useLoaderData();

  const [isAgreement, setIsAgreement] = useState(false);

  const handleChecked = () => {
    setIsAgreement((prev) => !prev);
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
        <p>모두가 즐거운 소셜링이 될 수 있도록 함께 지켜주세요</p>
        <ul>
          <li className="flex text-bjgreen-400">
            <Svg id="info" color="bjgreen-400" />
            <p>
              모임 시작 전 부득이하게 참여가 어려워진 경우, 반드시 호스트에게
              미리 알려주세요.
            </p>
          </li>
          <li className="flex text-bjgreen-400">
            <Svg id="info" color="bjgreen-400" />
            <p>
              나와 다른 의견에도 귀 기울이며, 함께하는 멤버들을 존중하는 태도를
              지켜주세요.
            </p>
          </li>
          <li className="flex text-bjred-400">
            <Svg id="subsctract" color="bjred-400" />
            <p>
              무단으로 불참하거나, 함께하는 멤버들을 존중하지 않고 피해를 주는
              경우 신고 제도를 통해 이용에 제재를 받게 됩니다.
            </p>
          </li>
        </ul>
        <CheckboxForm
          className="b-2-regular"
          name="agreement"
          onChange={handleChecked}
          checked={isAgreement}
        >
          소셜링 이용규칙을 지키겠습니다!
        </CheckboxForm>
        <MainButton
          color={isAgreement ? 'primary' : 'secondary'}
          to={isAgreement ? `/applicationClub2/${socialingId}` : '#'}
        >
          다음
        </MainButton>
      </div>
    </>
  );
}

export default ApplicationClub1;
