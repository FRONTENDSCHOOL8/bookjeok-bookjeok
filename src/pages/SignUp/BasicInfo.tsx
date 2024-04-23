import {
  validateEmail,
  validatePassword,
  getDescriptionEmail,
  getDescriptionPassword,
  getDescriptionConfirmPassword,
} from '@/utils';
import pb from '@/api/pocketbase';
import { Form } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDebounce } from '@/hooks/index';
import { useQuery } from '@tanstack/react-query';
import useSignUpStore from '@/store/useSignUpStore';
import { MainButton, NomalTitle, TextForm } from '@/components/Atoms';

const INITIAL_VALIDATE_STATE = {
  isNotRegisteredEmail: false,
  isValidateEmail: false,
  isValidatePassword: false,
  isConfirmPassword: false,
};

export function BasicInfo() {
  const { setInfo, setNextPage, enteredUserInfo } = useSignUpStore(
    (state) => state
  );
  const [userInfo, setUserInfo] = useState(enteredUserInfo);
  const [isValidateState, setIsValidateState] = useState(
    INITIAL_VALIDATE_STATE
  );
  const debouncedUserInfo = useDebounce(userInfo, 500);
  // 폼 change event 함수
  const handleUserInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    queryKey: ['emailDuplicate', debouncedUserInfo.email],
    queryFn: async () => {
      const fetchData = await pb.collection('users').getList(1, 1, {
        filter: `email="${debouncedUserInfo.email}"`,
      });
      setIsValidateState({
        ...isValidateState,
        ['isNotRegisteredEmail']: fetchData.items.length == 0,
      });
      return isValidateState.isNotRegisteredEmail;
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

  //버튼 클릭 이벤트 함수
  function handleButton() {
    setInfo(userInfo);
    setNextPage('detailInfo');
  }

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
              description={getDescriptionEmail(
                debouncedUserInfo.email,
                isValidateState
              )}
            >
              이메일
            </TextForm>

            <TextForm
              type="password"
              id="password"
              name="password"
              onChange={handleUserInfo}
              autoComplete="off"
              description={getDescriptionPassword(
                debouncedUserInfo.password,
                isValidateState
              )}
            >
              비밀번호
            </TextForm>
            <TextForm
              id="passwordConfirm"
              type="password"
              name="passwordConfirm"
              onChange={handleUserInfo}
              autoComplete="off"
              description={getDescriptionConfirmPassword(
                debouncedUserInfo.passwordConfirm,
                isValidateState
              )}
            >
              비밀번호 확인
            </TextForm>
          </Form>
        </div>
        <div className="mt-auto p-4">
          <MainButton
            onClick={
              isValidateState.isConfirmPassword &&
              isValidateState.isValidateEmail &&
              isValidateState.isNotRegisteredEmail &&
              isValidateState.isValidatePassword
                ? handleButton
                : undefined
            }
            color={
              isValidateState.isConfirmPassword &&
              isValidateState.isValidateEmail &&
              isValidateState.isNotRegisteredEmail &&
              isValidateState.isValidatePassword
                ? 'primary'
                : 'secondary'
            }
          >
            다음
          </MainButton>
        </div>
      </div>
    </>
  );
}
