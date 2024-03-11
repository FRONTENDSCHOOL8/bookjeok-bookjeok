import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { TextForm, NomalTitle, MainButton } from '@/components/Atoms';
import { useRef, useState, useCallback } from 'react';
import pb from '@/api/pocketbase';
import useUserInfoStore from '@/store/useUserInfoStore';
import { DobbleButtonModal } from '@/components/Molecules';
import { useQuery } from '@tanstack/react-query';

export function Login() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setUserInfo } = useUserInfoStore((state) => state);
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const [isClicked, setIsClicked] = useState(false);

  const handleLoginForm = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      emailRef.current = value;
    } else if (name === 'password') {
      passwordRef.current = value;
    }
  };

  const handleLogin = useCallback(() => {
    setIsClicked(true);
  }, []);

  const { isSuccess } = useQuery({
    queryKey: ['login'],
    queryFn: async () => {
      try {
        if (emailRef.current && passwordRef.current) {
          const { record, token } = await pb
            .collection('users')
            .authWithPassword(emailRef.current, passwordRef.current);
          setUserInfo({
            ...record,
            token,
          });
          setIsModalOpen(true);
          return { record, token };
        }
      } catch (error) {
        setIsModalOpen(true);
        throw error;
      }
    },
    enabled: isClicked,
    retry: 1,
  });

  return (
    <>
      <div className="flex h-svh flex-col">
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
          <DobbleButtonModal
            open={isModalOpen}
            closeButton
            svgId="logo"
            title={isSuccess ? '로그인 성공' : '로그인 실패'}
            onClick={() => setIsModalOpen(false)}
            primaryButtonText="홈으로 이동"
            primaryButtonPath={isSuccess ? '/MainClub' : undefined}
          >
            {isSuccess ? null : '계정 정보를 확인해주세요'}
          </DobbleButtonModal>
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
