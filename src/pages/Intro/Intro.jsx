import { Svg } from '@/components/Atoms';
import { Helmet } from 'react-helmet-async';
import { Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { bool } from 'prop-types';
import pb from '@/api/pocketbase';

function Intro({ isAllowed }) {
  console.log(pb);
  if (isAllowed) {
    return <Navigate to="/mainClub" replace />;
  }
  return (
    <>
      <Helmet>
        <title>북적북적</title>
      </Helmet>
      <div className="flex h-screen w-full justify-center bg-bjyellow-400">
        <div className="absolute top-[30%] flex flex-col items-center gap-2">
          <Svg width={60} height={60} id="logo" />
          <h1 className="text-h-1-semibold">북적북적</h1>
        </div>
        <div className="absolute bottom-0 mx-auto flex h-[20%] flex-col items-center gap-2">
          <Link to="/mainClub">둘러보기</Link>
          <div>
            <Link to="/login">로그인</Link> | <Link to="/signup">회원가입</Link>
          </div>
        </div>

        <Link className="absolute bottom-0 left-0" to="/atomMaking">
          atoms로 이동
        </Link>
      </div>
    </>
  );
}

export default Intro;

Intro.propTypes = {
  isAllowed: bool,
};
