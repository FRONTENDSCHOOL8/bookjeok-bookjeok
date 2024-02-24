import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Link, Form } from 'react-router-dom';
import { useDebounce } from '@/hooks/index';
import { validateEmail, validatePassword } from '@/utils';
import { MainButton } from '@/components/Atoms';

/*

1. 이메일 유효성 검사 => validateEmail 유틸함수 사용 setIsValidateEmail 상태값 true
2. 비밀번호 유효성 검사 => validatePassword 유틸함수 사용 setIsValidatePassword 상태값 true
3. 비밀번호 확인: 이전에 입력한 비밀번호와 같은지 검사 => setIsConfirmPassword 상태값 true
4. 전체 confirmPassword, isValidatePassword, isValidateEmail 둘다 true여야 다음 버튼 활성화
*/

export default function BasicInfo() {
  const INITIAL_USER_INFO = { email: '', password: '' };
  const [userInfo, setUserInfo] = useState(INITIAL_USER_INFO);
  const [isValidateEmail, setIsValidateEmail] = useState(false);
  const [isValidatePassword, setIsValidatePassword] = useState(false);
  const [isconfirmPassword, setIsConfirmPassword] = useState(false);

  const handleEmail = (e) => {
    const tempEmail = e.target.value;
    setUserInfo((prev) => ({ ...prev, email: tempEmail }));
  };

  const handlePassword = (e) => {
    const tempPassword = e.target.value;
    setUserInfo((prev) => ({ ...prev, password: tempPassword }));
  };

  const handlePasswordConfirm = (e) => {
    const enteredPassword = e.target.value;
    if (enteredPassword === userInfo.password) {
      setIsConfirmPassword(true);
    }
  };

  useDebounce(() => {
    if (!validateEmail(userInfo.email)) {
      setIsValidateEmail(false);
    } else {
      setIsValidateEmail(true);
    }
  }, 500);

  useDebounce(() => {
    if (!validatePassword(userInfo.password)) {
      setIsValidatePassword(false);
    } else {
      setIsValidatePassword(true);
    }
  }, 500);

  return (
    <>
      <h1>회원가입</h1>
      <h2>기본 정보</h2>
      <Form className="flex flex-col" action="">
        <label htmlFor="email">이메일</label>
        <input type="email" id="email" onChange={handleEmail} />
        {userInfo.email == '' || isValidateEmail ? (
          ''
        ) : (
          <p>유효한 이메일 주소를 작성해주세요.</p>
        )}
        <label htmlFor="password">비밀번호</label>
        <input type="password" id="password" onChange={handlePassword} />
        {userInfo.password == '' || isValidatePassword ? (
          ''
        ) : (
          <p>비밀번호는 8자 이상 숫자, 특수문자를 포함해야 합니다.</p>
        )}
        <label htmlFor="passwordConfirm">비밀번호확인</label>
        {}
        <input
          id="passwordConfirm"
          type="password"
          onChange={handlePasswordConfirm}
        />
        {isconfirmPassword || userInfo.password == ''
          ? ''
          : '동일한 비밀번호를 입력해주세요.'}
      </Form>

      <Link to="/signup/detail" state={userInfo}>
        <MainButton
          className="large_primary"
          type="button"
          disabled={
            !(isValidatePassword && isValidateEmail && isconfirmPassword)
          }
        >
          다음
        </MainButton>
      </Link>
    </>
  );
}
