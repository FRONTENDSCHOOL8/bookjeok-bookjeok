import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { NomalTitle, CheckboxForm, MainButton } from '@/components/Atoms';
import { Svg } from '@/components/Atoms';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export function ApplicationClub1() {
  const { clubId } = useParams();
  const [isAgreement, setIsAgreement] = useState(false);

  const handleChecked = () => {
    setIsAgreement((prev) => !prev);
  };

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('모임 신청하기')}</title>
      </Helmet>
      <div className="flex min-h-svh flex-col">
        <NomalTitle backLink subText="1 of 2">
          모임신청
        </NomalTitle>

        <div className="flex flex-grow flex-col px-4">
          <div className="flex flex-col py-4 pt-10 text-center text-h-2-semibold">
            <span>모두가 즐거운 소셜링이 될 수 있도록 </span>
            <span>함께 지켜주세요</span>
          </div>
          <ul className="flex flex-col gap-4 break-keep py-4">
            <li className="flex items-center gap-4 text-bjgreen-500">
              <Svg id="info" color="bjgreen-500" className="shrink-0" />
              <p>
                모임 시작 전 부득이하게 참여가 어려워진 경우, 반드시 호스트에게
                미리 알려주세요.
              </p>
            </li>
            <li className="flex items-center gap-4  text-bjgreen-500">
              <Svg id="info" color="bjgreen-500" className="shrink-0" />
              <p>
                나와 다른 의견에도 귀 기울이며, 함께하는 멤버들을 존중하는
                태도를 지켜주세요.
              </p>
            </li>
            <li className="flex items-center gap-4 text-bjred-500">
              <Svg id="subsctract" color="bjred-500" className="shrink-0" />
              <p>
                무단으로 불참하거나, 함께하는 멤버들을 존중하지 않고 피해를 주는
                경우 신고 제도를 통해 이용에 제재를 받게 됩니다.
              </p>
            </li>
          </ul>
          <CheckboxForm
            className="py-4 "
            name="agreement"
            onChange={handleChecked}
            checked={isAgreement}
            id="agree"
          >
            <span className="text-b-1-regular">
              소셜링 이용규칙을 지키겠습니다!
            </span>
          </CheckboxForm>
          <div className="my-4 mt-auto">
            <MainButton
              color={isAgreement ? 'primary' : 'secondary'}
              to={isAgreement ? `/applicationClub2/${clubId}` : ''}
              className={
                isAgreement ? `pointer-events-auto` : `pointer-events-none`
              }
            >
              다음
            </MainButton>
          </div>
        </div>
      </div>
    </>
  );
}
