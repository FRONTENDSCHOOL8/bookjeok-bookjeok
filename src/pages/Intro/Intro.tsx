import { Svg } from '@/components/Atoms';
import { Helmet } from 'react-helmet-async';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useUserInfoStore from '@/store/useUserInfoStore';

export function Intro() {
  const { userInfo } = useUserInfoStore((state) => ({
    userInfo: state.userInfo,
  }));
  if (userInfo) {
    return <Navigate to="/main/club" replace />;
  }
  return (
    <>
      <Helmet>
        <title>북적북적</title>
      </Helmet>
      <div className="flex min-h-svh w-full justify-center bg-bjyellow-400">
        <div className="absolute top-[30%] flex flex-col items-center gap-2">
          <Svg size={60} id="logo" />
          <h1 className="text-h-1-semibold">북적북적</h1>
        </div>
        <div className="absolute bottom-0 mx-auto flex h-[20%] flex-col items-center gap-2">
          <Link to="/main/club">둘러보기</Link>
          <div>
            <Link to="/login">로그인</Link> | <Link to="/signup">회원가입</Link>
          </div>
        </div>
      </div>
    </>
  );
}
