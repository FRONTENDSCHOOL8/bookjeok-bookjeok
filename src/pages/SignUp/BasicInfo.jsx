import { useState, useEffect } from 'react';
import { Link, Form } from 'react-router-dom';
import { useDebounce } from '@/hooks/index';
import { validateEmail, validatePassword, fetchReadDataAPI } from '@/utils';
import { MainButton } from '@/components/Atoms';

/*

1. 이메일 유효성 검사 => validateEmail 유틸함수 사용 setIsValidateEmail 상태값 true
2. 이메일 중복 검사 => validateEmail true 이면 이펙트 함수 실행 setDuplicatedEmail 상태값 false 
3. 비밀번호 유효성 검사 => validatePassword 유틸함수 사용 setIsValidatePassword 상태값 true
4. 비밀번호 확인: 이전에 입력한 비밀번호와 같은지 검사 => setIsConfirmPassword 상태값 true
5. 전체 confirmPassword, isValidatePassword, isValidateEmail 셋다 true , duplicatedEmail true 여야 다음 버튼 활성화
*/
const INITIAL_USER_INFO = {
  email: '',
  password: '',
  nickname: '',
  phone: '',
  birth: '',
  gender: '',
};

const TEST_PASSWORD = 'qwerty1234!';

export default function BasicInfo() {
  const [userInfo, setUserInfo] = useState(INITIAL_USER_INFO);
  const [isValidateEmail, setIsValidateEmail] = useState(false);
  const [isDuplicatedEmail, setIsDuplicatedEmail] = useState(false);
  const [isValidatePassword, setIsValidatePassword] = useState(false);
  const [isconfirmPassword, setIsConfirmPassword] = useState(false);
  const debouncedUserInfo = useDebounce(userInfo, 500);
  const handleUserInfo = (e) => {
    const updatedUserInfo = { ...userInfo, [e.target.name]: e.target.value };
    console.log(updatedUserInfo);
    setUserInfo(updatedUserInfo);
  };

  const handlePasswordConfirm = (e) => {
    const enteredPassword = e.target.value;
    if (enteredPassword === userInfo.password) {
      setIsConfirmPassword(true);
    } else {
      setIsConfirmPassword(false);
    }
  };

  //중복검사
  useEffect(() => {
    if (validateEmail(debouncedUserInfo.email)) {
      setIsValidateEmail(true);
      fetchReadDataAPI('users', 'email', debouncedUserInfo.email)
        .then((data) => {
          console.log(data);
          setIsDuplicatedEmail(data.length === 0);
        })
        .catch((error) => console.error(error));
    } else {
      setIsValidateEmail(false);
    }
  }, [debouncedUserInfo.email]);

  useEffect(() => {
    validatePassword(debouncedUserInfo.password)
      ? setIsValidatePassword(true)
      : setIsValidatePassword(false);
  }, [debouncedUserInfo.password]);

  console.log(TEST_PASSWORD);
  return (
    <>
      <h1>회원가입</h1>
      <h2>기본 정보</h2>
      <Form className="flex flex-col" method="post">
        <label htmlFor="email">이메일</label>
        <input
          name="email"
          type="email"
          id="email"
          onChange={handleUserInfo}
          autoComplete="off"
        />
        {userInfo.email == '' || isValidateEmail ? (
          ''
        ) : (
          <p>유효한 이메일 주소를 작성해주세요.</p>
        )}
        {userInfo.email == '' || isDuplicatedEmail ? null : (
          <p>이미 가입한 이메일입니다! </p>
        )}
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleUserInfo}
        />
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
          name="confirmPassword"
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
            !isValidatePassword && !isconfirmPassword && !isDuplicatedEmail
          }
        >
          다음
        </MainButton>
      </Link>
    </>
  );
}
