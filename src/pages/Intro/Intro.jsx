import { Svg } from '@/components/Atoms';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function Intro() {
  return (
    <>
      <Helmet>
        <title>북적북적</title>
      </Helmet>
      <div className="w-full h-screen bg-bjyellow-400 flex justify-center">
        <div className="flex flex-col items-center gap-2 absolute top-[30%]">
          <Svg width="60" height="60" id="logo" />
          <h1 className="text-h-1-semibold">북적북적</h1>
        </div>
        <div className="absolute bottom-0 mx-auto flex flex-col gap-2 items-center h-[20%]">
          <Link to="/mainclub">둘러보기</Link>
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
