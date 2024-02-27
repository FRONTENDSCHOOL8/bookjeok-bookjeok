import { useState, useEffect } from 'react';
import { Link, Form } from 'react-router-dom';
import { useDebounce } from '@/hooks/index';
import { validateEmail, validatePassword } from '@/utils';
import { MainButton } from '@/components/Atoms';
import pb from '@/api/pocketbase';
/*

1. 이메일 유효성 검사 => validateEmail 유틸함수 사용 setIsValidateEmail 상태값 true
2. 이메일 중복 검사 => validateEmail true 이면 이펙트 함수 실행 setDuplicatedEmail 상태값 false 
3. 비밀번호 유효성 검사 => validatePassword 유틸함수 사용 setIsValidatePassword 상태값 true
4. 비밀번호 확인: 이전에 입력한 비밀번호와 같은지 검사 => setIsConfirmPassword 상태값 true
5. 전체 confirmPassword, isValidatePassword, isValidateEmail 셋다 true , duplicatedEmail false 여야 다음 버튼 활성화
*/
const INITIAL_USER_INFO = {
  email: '',
  password: '',
  nickname: '',
  phone: '',
  birth: '',
  gender: '',
  emailVisibility: true,
};

export default function BasicInfo() {
  const [userInfo, setUserInfo] = useState(INITIAL_USER_INFO);
  const [isRegisteredEmail, setIsRegisteredEmail] = useState(true);
  const [isValidateEmail, setIsValidateEmail] = useState(false);
  const [isValidatePassword, setIsValidatePassword] = useState(false);
  const [isconfirmPassword, setIsConfirmPassword] = useState(false);
  const debouncedUserInfo = useDebounce(userInfo, 500);

  const handleUserInfo = (e) => {
    const updatedUserInfo = { ...userInfo, [e.target.name]: e.target.value };
    setUserInfo(updatedUserInfo);
  };

  // 이메일 유효성검사
  useEffect(() => {
    setIsValidateEmail(validateEmail(debouncedUserInfo.email));
  }, [debouncedUserInfo.email]);

  //이메일 중복검사
  useEffect(() => {
    if (isValidateEmail) {
      pb.collection('users')
        .getList(1, 1, {
          filter: `email="${debouncedUserInfo.email}"`,
        })
        .then((data) => {
          setIsRegisteredEmail(data.items.length !== 0);
        })
        .catch((error) => console.log(error));
    }
  }, [debouncedUserInfo.email, isValidateEmail]);

  //비밀번호 유효성 검사
  useEffect(() => {
    setIsValidatePassword(validatePassword(debouncedUserInfo.password));
  }, [debouncedUserInfo.password]);

  //비밀번호 확인
  useEffect(() => {
    if ('passwordConfirm' in userInfo) {
      setIsConfirmPassword(
        debouncedUserInfo.password === debouncedUserInfo.passwordConfirm
      );
    }
  }, [debouncedUserInfo.password, debouncedUserInfo.passwordConfirm]);

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
        {userInfo.email && isValidateEmail && isRegisteredEmail
          ? '이미 사용 중인 이메일 주소입니다.'
          : ''}
        <label htmlFor="password">비밀번호</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleUserInfo}
        />
        {userInfo.password == '' || isValidatePassword
          ? ''
          : '비밀번호는 8자 이상 영문, 숫자, 특수문자를 포함해 작성해주세요'}
        <label htmlFor="passwordConfirm">비밀번호확인</label>
        <input
          id="passwordConfirm"
          type="password"
          name="passwordConfirm"
          onChange={handleUserInfo}
        />
        {userInfo.password == '' || isconfirmPassword
          ? ''
          : '동일한 비밀번호를 입력해주세요.'}
      </Form>

      <Link to="/signup/detail" state={userInfo}>
        <MainButton
          type="button"
          disabled={
            !(isValidatePassword && isconfirmPassword && !isRegisteredEmail)
          }
        >
          다음
        </MainButton>
      </Link>
    </>
  );
}
