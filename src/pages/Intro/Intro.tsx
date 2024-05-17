import { MainButton, Svg } from '@/components/Atoms';
import useUserInfoStore from '@/store/useUserInfoStore';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navigate } from 'react-router-dom';

export function Intro() {
  const container = useRef(null);
  const { userInfo } = useUserInfoStore((state) => ({
    userInfo: state.userInfo,
  }));
  if (userInfo) {
    return <Navigate to="/main/club" replace />;
  }

  gsap.registerPlugin(useGSAP);
  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from('.intro-animation', { opacity: '0', duration: 1, y: 50 })
        .from('.view-around', { opacity: '0', duration: 0.5, y: -30 }, '-=0.5')
        .from('.login-animation', { opacity: '0', duration: 0.5, y: 30 }, '<')
        .from('.test', { opacity: '0', duration: 0.5 }, '<');
    },
    { scope: container }
  );
  return (
    <>
      <Helmet>
        <title>북적북적</title>
      </Helmet>
      <main
        ref={container}
        className="flex min-h-svh w-full justify-center bg-bjyellow-400"
      >
        <div className="intro-animation absolute top-[25%] flex flex-col items-center gap-2">
          <Svg size={60} id="logo" />
          <h1 className="text-h-1-semibold">북적북적</h1>
        </div>
        <div className="absolute bottom-0 mx-auto flex h-[45%] w-56 flex-col items-center gap-4">
          <div className="test flex flex-col justify-center rounded-4xl bg-bjyellow-100 px-12 py-4 text-center text-b-0-medium opacity-40">
            <span>테스트 계정</span>
            <span>ID : wat@ch.me</span>
            <span>PW : qwert123!</span>
          </div>
          <MainButton
            size="sm"
            className="view-around text-b-0-medium shadow-xl"
            to="/main/club"
            color="third"
          >
            둘러보기
          </MainButton>
          <div className="login-animation flex w-56 items-center gap-2 text-b-0-medium">
            <MainButton
              size="sm"
              className="p-4 shadow-xl"
              color="third"
              to="/login"
            >
              로그인
            </MainButton>
            <MainButton
              size="sm"
              className="p-4 text-b-0-medium shadow-xl"
              color="third"
              to="/signup"
            >
              회원가입
            </MainButton>
          </div>
        </div>
      </main>
    </>
  );
}
