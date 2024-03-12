import { getDocumentTitle, validateEmail } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { TextForm, NomalTitle, MainButton } from '@/components/Atoms';
import { useRef, useState, useCallback, useEffect } from 'react';
import pb from '@/api/pocketbase';
import useUserInfoStore from '@/store/useUserInfoStore';
import { DobbleButtonModal } from '@/components/Molecules';
import { useQuery } from '@tanstack/react-query';

/*
1. enter로 로그인 버튼 접근
2. 모달 에서 esc -> 닫기 enter -> 링크이동이나 / 버튼이동 

*/
export function Login() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const { setUserInfo } = useUserInfoStore((state) => state);
  const emailRef = useRef('');
  const passwordRef = useRef('');

  useEffect(() => {
    if (isModalOpen && event.keyCode === 27) {
      console.log('hey~');
      setIsModalOpen(false);
    }
  }, [isModalOpen]);

  const handleLoginForm = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      emailRef.current = value;
    } else if (name === 'password') {
      passwordRef.current = value;
    }
  };

  const handleLogin = useCallback((e) => {
    e.preventDefault();
    setIsClicked(true);
  }, []);

  const { isSuccess } = useQuery({
    queryKey: ['login'],
    queryFn: async () => {
      try {
        if (
          !isModalOpen &&
          validateEmail(emailRef.current) &&
          passwordRef.current
        ) {
          const { record, token } = await pb
            .collection('users')
            .authWithPassword(emailRef.current, passwordRef.current);
          setUserInfo({
            ...record,
            token,
          });
          setIsModalOpen(true);
          console.log('false');
          setIsClicked(false);
          return { record, token };
        }
      } catch (error) {
        setIsModalOpen(true);
        setIsClicked(false);
        throw error;
      }
    },
    enabled: isClicked,
    retry: 0,
  });

  return (
    <>
      <div className="flex min-h-svh flex-col">
        <Helmet>
          <title>{getDocumentTitle('로그인')}</title>
        </Helmet>
        <NomalTitle backLink>로그인</NomalTitle>
        <form
          className="flex flex-grow flex-col gap-y-4 px-4 py-2"
          onChange={handleLoginForm}
        >
          <TextForm type="email" placeholder="email@email.com" name="email">
            이메일
          </TextForm>
          <TextForm type="password" placeholder="" name="password">
            비밀번호
          </TextForm>
          <div className="mt-auto p-4">
            <MainButton
              className="mt-auto p-4"
              onClick={handleLogin}
              as="button"
              type="submit"
            >
              로그인
            </MainButton>
          </div>
        </form>
        <DobbleButtonModal
          open={isModalOpen}
          closeButton
          svgId="logo"
          title={isSuccess ? '로그인 성공' : '로그인 실패'}
          onClick={() => setIsModalOpen(false)}
          primaryButtonText={isSuccess ? '홈으로 이동' : undefined}
          primaryButtonPath={isSuccess ? '/MainClub' : undefined}
        >
          {isSuccess ? null : '계정 정보를 확인해주세요'}
        </DobbleButtonModal>
      </div>
    </>
  );
}
