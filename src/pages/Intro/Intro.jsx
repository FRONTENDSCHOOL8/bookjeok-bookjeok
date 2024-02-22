import { Link } from 'react-router-dom';

function Intro() {
  return (
    <div className="w-screen h-screen bg-bjyellow-300 flex justify-center">
      <div className="flex flex-col items-center gap-2 absolute top-[30%]">
        <svg
          aria-hidden="true"
          width="40"
          height="40"
          viewBox="0 0 20 20"
          role="img"
        >
          <use href="src/assets/icons/_sprite.svg#logo" />
        </svg>
        <h1 className="text-h-1-semibold">북적북적</h1>
      </div>
      <div className="absolute bottom-0 mx-auto flex flex-col gap-2 items-center h-[20%]">
        <Link to="/mainclub">둘러보기</Link>
        <div>
          <Link to="/login">로그인</Link> | <Link to="/signin">회원가입</Link>
        </div>
      </div>

      <Link className="absolute bottom-0 left-0" to="/atoms">
        atoms로 이동
      </Link>
    </div>
  );
}

export default Intro;
