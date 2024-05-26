import pb from '@/api/pocketbase';
import { useCloseModal } from '@/hooks';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import { useRef, useState, useCallback, useEffect } from 'react';
import useUserInfoStore from '@/store/useUserInfoStore';
import { getDocumentTitle, validateEmail } from '@/utils';
import { DobbleButtonModal } from '@/components/Molecules';
import { TextForm, NomalTitle, MainButton } from '@/components/Atoms';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const [isClicked, setIsClicked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setUserInfo } = useUserInfoStore((state) => state);
  useCloseModal(isModalOpen, () => setIsModalOpen(false));
  const navigate = useNavigate();
  const handleLoginForm: React.FormEventHandler<HTMLElement> = (e) => {
    const { name, value } = e.target as HTMLInputElement;
    if (name === 'email') {
      emailRef.current = value;
    } else if (name === 'password') {
      passwordRef.current = value;
    }
  };

  const handleLogin = useCallback((e: React.FormEvent) => {
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
          navigate('/Main/club');
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
          onSubmit={handleLogin}
          className="flex flex-grow flex-col gap-y-4 p-4"
          onChange={handleLoginForm}
        >
          <TextForm
            type="email"
            id="email"
            placeholder="email@email.com"
            name="email"
          >
            이메일
          </TextForm>
          <TextForm
            type="password"
            id="password"
            placeholder=""
            name="password"
          >
            비밀번호
          </TextForm>
          <div className="mt-auto">
            <MainButton className="mt-auto p-4" as="button" type="submit">
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
          primaryButtonText={isSuccess ? '홈으로' : undefined}
          primaryButtonPath={isSuccess ? '/Main/club' : undefined}
        >
          {isSuccess ? null : '계정 정보를 확인해주세요'}
        </DobbleButtonModal>
      </div>
    </>
  );
}
