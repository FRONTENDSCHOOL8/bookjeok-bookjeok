import { useState, useEffect } from 'react';
import { Link, Form } from 'react-router-dom';
import { useDebounce } from '@/hooks/index';
import { validateEmail, validatePassword, fetchReadDataAPI } from '@/utils';
import { MainButton } from '@/components/Atoms';
import pb from '@/api/pocketbase';
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
  const [isDuplicatedEmail, setIsDuplicatedEmail] = useState(false);
  const [isValidateEmail, setIsValidateEmail] = useState(false);
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

  // 이메일 유효성검사
  useEffect(() => {
    setIsValidateEmail(validateEmail(debouncedUserInfo.email));
  }, [debouncedUserInfo.email]);

  //이메일 중복검사
  useEffect(() => {
    if (isValidateEmail) {
      pb.collection('users')
        .getList(1, 10, {
          filter: `email="${debouncedUserInfo.email}"`,
        })
        .then((data) => {
          console.log(data);
          setIsDuplicatedEmail(data.items.length !== 0);
        })
        .catch((error) => console.log(error));
    }
  }, [debouncedUserInfo.email, isValidateEmail]);

  //비밀번호 유효성 검사
  useEffect(() => {
    validatePassword(debouncedUserInfo.password)
      ? setIsValidatePassword(true)
      : setIsValidatePassword(false);
  }, [debouncedUserInfo.password]);

  //비밀번호 확인 (비밀번호변경시 비밀번호 확인 변경 .. )
  useEffect(() => {
    if (validatePassword(debouncedUserInfo.password)) {
      setIsConfirmPassword(userInfo.password === debouncedUserInfo.password);
    } else {
      setIsConfirmPassword(false);
    }
  }, [userInfo.password]);

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
        {userInfo.email == '' || isValidateEmail
          ? ''
          : '이메일 형식이 올바르지 않습니다.'}
        {userInfo.email && isValidateEmail && isDuplicatedEmail
          ? '이미 사용 중인 이메일 주소입니다.'
          : ''}
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleUserInfo}
        />
        {userInfo.password == '' ||
          validatePassword(debouncedUserInfo.password)}
        <label htmlFor="passwordConfirm">비밀번호확인</label>
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
          disabled={!isconfirmPassword && !isDuplicatedEmail}
        >
          다음
        </MainButton>
      </Link>
    </>
  );
}
