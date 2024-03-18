import pb from '@/api/pocketbase';
import { Form } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDebounce } from '@/hooks/index';
import { useQuery } from '@tanstack/react-query';
import { validateEmail, validatePassword } from '@/utils';
import { MainButton, NomalTitle, TextForm } from '@/components/Atoms';

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

  //중복 이메일 체크
  useQuery({
    queryKey: ['emailDuplicate', debouncedUserInfo.email, isValidateState],
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
                // (userInfo.email == '' || isValidateState.isValidateEmail
                //   ? ''
                //   : '이메일 형식이 올바르지 않습니다.',
                // userInfo.email &&
                // isValidateState.isValidateEmail &&
                // isValidateState.isRegisteredEmail
                //   ? '이미 사용 중인 이메일 주소입니다.'
                //   : '')
                getDescriptionEmail(debouncedUserInfo.email, isValidateState)
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
                userInfo.password == '' || isValidateState.isValidatePassword
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
                userInfo.password == '' || isValidateState.isconfirmPassword
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

const getDescriptionEmail = (email, state) => {
  if (email == '') return;
  if (!validateEmail(email)) {
    return '이메일 형식이 올바르지 않습니다.';
  }
  if (!state.isNotRegisteredEmail) {
    return '이미 사용 중인 이메일 주소 입니다.';
  }
};
const getDescriptionPassword = (password, state) => {
  if (password == '') return;
  if (!state.isValidatePassword) {
    ('비밀번호는 8자 이상 영문, 숫자, 특수문자를 포함해 작성해주세요');
  }
};

const getDescriptionConfirmPassword = (confirmPassword) => {
  if (confirmPassword == '') return;
  if (confirmPassword.password !== confirmPassword.passwordConfirm) {
    return '동일한 비밀번호를 입력해주세요.';
  }
};
