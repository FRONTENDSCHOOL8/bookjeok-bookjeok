import pb from '@/api/pocketbase';
import { Form } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDebounce } from '@/hooks/index';
import { validateEmail, validatePassword } from '@/utils';
import { MainButton, NomalTitle, TextForm } from '@/components/Atoms';
import { useQuery } from '@tanstack/react-query';
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

const INITIAL_VALIDATE_STATE = {
  isNotRegisteredEmail: false,
  isValidateEmail: false,
  isValidatePassword: false,
  isConfirmPassword: false,
};

export function BasicInfo() {
  const [userInfo, setUserInfo] = useState(INITIAL_USER_INFO);
  const [isRegisteredEmail, setIsRegisteredEmail] = useState(true);
  const [isValidateEmail, setIsValidateEmail] = useState(false);
  const [isValidatePassword, setIsValidatePassword] = useState(false);
  const [isconfirmPassword, setIsConfirmPassword] = useState(false);
  const [isValidateState, setIsValidateState] = useState(
    INITIAL_VALIDATE_STATE
  );

  const debouncedUserInfo = useDebounce(userInfo, 500);

  const handleUserInfo = (e) => {
    const updatedUserInfo = { ...userInfo, [e.target.name]: e.target.value };
    setUserInfo(updatedUserInfo);
  };

  // 이메일 유효성검사
  useEffect(() => {
    setIsValidateState({
      ...isValidateState,
      ['isValidateEmail']: validateEmail(debouncedUserInfo.email),
    });
  }, [debouncedUserInfo.email]);

  useQuery({
    queryKey: [
      'emailDuplicate',
      debouncedUserInfo.email,
      isValidateState.isValidateEmail,
    ],
    queryFn: async () => {
      const fetchData = await pb.collection('users').getList(1, 1, {
        filter: `email="${debouncedUserInfo.email}"`,
      });

      return setIsValidateState({
        ...isValidateState,
        ['isNotRegisteredEmail']: fetchData.items.length == 0,
      });
    },
    enabled: isValidateState.isValidateEmail,
  });

  //비밀번호 유효성 검사
  useEffect(() => {
    setIsValidateState({
      ...isValidateState,
      ['isValidatePassword']: validatePassword(debouncedUserInfo.password),
    });
  }, [debouncedUserInfo.password]);

  //비밀번호 확인
  useEffect(() => {
    if ('passwordConfirm' in userInfo) {
      setIsValidateState({
        ...isValidateState,
        ['isConfirmPassword']:
          debouncedUserInfo.password === debouncedUserInfo.passwordConfirm,
      });
    }
  }, [debouncedUserInfo.password, debouncedUserInfo.passwordConfirm]);

  console.log(isValidateState);

  return (
    <>
      <div className="flex min-h-svh flex-col">
        <NomalTitle backLink subText="1 of 2">
          회원가입
        </NomalTitle>
        <div className="flex-grow">
          <h2 className="p-4 text-h-2-semibold">기본 정보</h2>
          <Form className="flex flex-col gap-y-4 px-4 py-2" method="post">
            <TextForm
              name="email"
              type="email"
              id="email"
              onChange={handleUserInfo}
              autoComplete="off"
              description={
                (userInfo.email == '' || isValidateEmail
                  ? ''
                  : '이메일 형식이 올바르지 않습니다.',
                userInfo.email && isValidateEmail && isRegisteredEmail
                  ? '이미 사용 중인 이메일 주소입니다.'
                  : '')
              }
            >
              이메일
            </TextForm>

            <TextForm
              type="password"
              id="password"
              name="password"
              onChange={handleUserInfo}
              autoComplete="off"
              description={
                userInfo.password == '' || isValidatePassword
                  ? ''
                  : '비밀번호는 8자 이상 영문, 숫자, 특수문자를 포함해 작성해주세요'
              }
            >
              비밀번호
            </TextForm>
            <TextForm
              id="passwordConfirm"
              type="password"
              name="passwordConfirm"
              onChange={handleUserInfo}
              autoComplete="off"
              description={
                userInfo.password == '' || isconfirmPassword
                  ? ''
                  : '동일한 비밀번호를 입력해주세요.'
              }
            >
              비밀번호 확인
            </TextForm>
          </Form>
        </div>
        <div className="mt-auto p-4">
          <MainButton state={userInfo} to={'/signup/detail'}>
            다음
          </MainButton>
        </div>
      </div>
    </>
  );
}
