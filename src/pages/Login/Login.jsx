import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { TextForm, NomalTitle, MainButton } from '@/components/Atoms';
import { useRef, useState } from 'react';
import pb from '@/api/pocketbase';
import useUserInfoStore from '@/store/useUserInfoStore';
import { DobbleButtonModal } from '@/components/Molecules';

/*
1. useRef로 email, password -> useRef 상태관리x 
2. 버튼을 눌렀을때 이메일과 패스워드가 맞는지 확인 => 완료  
3. 어떻게 로그인 성공 / 실패를 알려야될까.. 고민중. . .
  - 시각적 에니메이션 -> 어떻게 스크린리더사용자에게 전달할수 있을까?
  - 성공 알림 모달-> 확인 버튼 클릭시 메인으로 이동 | 실패 모달 ?  
*/

export function Login() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginSuccess, setIsLoginSuccess] = useState(false);
  const { setUserInfo } = useUserInfoStore((state) => state);
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const handleLoginForm = (e) => {
    const target = e.target.closest('input');
    if (!target) return;
    if (target) {
      e.target.name === 'email'
        ? (emailRef.current = e.target.value)
        : (passwordRef.current = e.target.value);
    }
  };

  // 로그인 이벤트 함수 (로그인 성공/실패 결과 표시 필요 ! )
  const handleLogin = () => {
    pb.collection('users')
      .authWithPassword(`${emailRef.current}`, `${passwordRef.current}`)
      .then(({ record, token }) => {
        setUserInfo({
          ...record,
          token,
        });
        setIsModalOpen(true);
        setIsLoginSuccess(true);
      })
      .catch((Error) => {
        setIsLoginSuccess(false);
        setIsModalOpen(true);
        console.error(Error);
      });
  };

  return (
    <>
      <div className="flex h-dvh h-svh flex-col">
        <Helmet>
          <title>{getDocumentTitle('로그인')}</title>
        </Helmet>
        <NomalTitle backLink>로그인</NomalTitle>
        <div className="flex-grow">
          <div
            className="flex flex-col gap-y-4 px-4 py-2"
            onChange={handleLoginForm}
          >
            <TextForm type="email" placeholder="email@email.com" name="email">
              이메일
            </TextForm>
            <TextForm type="password" placeholder="" name="password">
              비밀번호
            </TextForm>
          </div>
          {isLoginSuccess ? (
            <DobbleButtonModal
              open={isModalOpen}
              svgId="logo"
              closeButton
              title="로그인 성공"
              onClick={() => setIsModalOpen(false)}
              primaryButtonText="홈으로 이동"
              primaryButtonPath="/MainClub"
            ></DobbleButtonModal>
          ) : (
            <DobbleButtonModal
              open={isModalOpen}
              closeButton
              title="로그인 실패"
              svgId="logo"
              onClick={() => setIsModalOpen(false)}
            >
              계정 정보를 확인해주세요
            </DobbleButtonModal>
          )}
        </div>
        <div className="mt-auto p-4">
          <MainButton onClick={handleLogin} as="button">
            로그인
          </MainButton>
        </div>
      </div>
    </>
  );
}
