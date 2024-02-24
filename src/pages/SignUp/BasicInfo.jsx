import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Link, Form } from 'react-router-dom';
import { useDebounce } from '@/hooks/index';
import { validateEmail } from '@/utils';

export default function BasicInfo() {
  const INITIAL_USER_INFO = { email: '', password: '' };
  const [userInfo, setUserInfo] = useState(INITIAL_USER_INFO);
  const [isValidateEmail, setIsValidateEmail] = useState(false);

  const handleEmail = (e) => {
    const tempEmail = e.target.value;
    setUserInfo((prev) => ({ ...prev, email: tempEmail }));
    console.log(userInfo);
  };

  useDebounce(
    () => {
      console.log('실행!');
      if (!validateEmail(userInfo.email)) {
        setIsValidateEmail(false);
      } else {
        setIsValidateEmail(true);
      }
    },
    500,
    [userInfo.email]
  );

  return (
    <>
      <h1>회원가입</h1>
      <h2>기본 정보</h2>
      <Form className="flex flex-col" action="">
        <label htmlFor="email">이메일</label>
        <input type="email" id="email" onChange={handleEmail} />
        {isValidateEmail ? '' : <p>유효한 이메일 주소를 작성해주세요.</p>}
        <label htmlFor="password">비밀번호</label>
        <input type="password" id="password" />
        <label htmlFor="passwordConfirm">비밀번호확인</label>
        <input id="passwordConfirm" type="password" />
      </Form>
      <Link to="/signup/detail">다음</Link>
      <Outlet></Outlet>
      {/*이게아닌데 ㅜㅜ 흐앙  */}
    </>
  );
}
