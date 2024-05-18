import {
  MainButton,
  NomalTitle,
  TextForm,
  RadioForm,
} from '@/components/Atoms';
import { useState } from 'react';
import pb from '@/api/pocketbase';
import { useDebounce } from '@/hooks';
import { useNavigate, Form } from 'react-router-dom';
import useSignUpStore from '@/store/useSignUpStore';
import { useMutation, useQuery } from '@tanstack/react-query';

const INITIAL_STATE = { isDuplicatedNickname: false, isRegisteredPhone: true };

export function DetailInfo() {
  const navigate = useNavigate();
  const setNextPage = useSignUpStore((state) => state.setNextPage);
  const enteredUserInfo = useSignUpStore((state) => state.enteredUserInfo);
  const [userInfo, setUserInfo] = useState(enteredUserInfo);
  const [validateState, setValidateState] = useState(INITIAL_STATE);
  const debouncedUserInfo = useDebounce(userInfo, 500);

  const handleUserInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updatedUserInfo = { ...userInfo, [e.target.name]: e.target.value };
    setUserInfo(updatedUserInfo);
  };

  // db 적재 !
  const { mutateAsync: handleSubmit } = useMutation({
    mutationFn: async () => {
      await pb.collection('users').create(userInfo);
    },
    onSuccess: () => {
      setNextPage('basicInfo');
      navigate('/welcome');
    },
  });

  //닉네임 중복검사
  useQuery({
    queryFn: async () => {
      const data = await pb.collection('users').getList(1, 1, {
        filter: `nickname = "${debouncedUserInfo.nickname}"`,
      });
      setValidateState({
        ...validateState,
        ['isDuplicatedNickname']: data.items.length !== 0,
      });
      return validateState.isDuplicatedNickname;
    },
    queryKey: ['duplicateNickname', debouncedUserInfo.nickname],
    enabled: debouncedUserInfo.nickname !== '',
  });

  //전화번호 중복검사
  useQuery({
    queryFn: async () => {
      const data = await pb.collection('users').getList(1, 1, {
        filter: `phone = "${debouncedUserInfo.phone}"`,
      });
      setValidateState({
        ...validateState,
        ['isRegisteredPhone']: data.items.length !== 0,
      });
      return validateState.isRegisteredPhone;
    },
    queryKey: ['isRegisteredPhoneNumber', debouncedUserInfo.phone],
    enabled: debouncedUserInfo.phone !== '',
  });

  return (
    <div className="flex min-h-svh flex-col">
      <NomalTitle backLink subText="2 of 2">
        회원가입
      </NomalTitle>
      <div className="flex-grow">
        <h2 className="p-4 text-h-2-semibold">상세 정보</h2>
        <Form className="flex flex-col gap-y-4 px-4 py-2" method="post">
          <TextForm
            type="text"
            id="nickname"
            name="nickname"
            maxLength={10}
            onChange={handleUserInfo}
            description={
              userInfo.nickname && validateState.isDuplicatedNickname
                ? '이미 사용 중인 닉네임 입니다. '
                : ''
            }
            error={Boolean(
              userInfo.nickname && validateState.isDuplicatedNickname
                ? '이미 사용 중인 닉네임 입니다. '
                : ''
            )}
          >
            닉네임
          </TextForm>
          <TextForm
            type="text"
            id="phone"
            name="phone"
            maxLength={11}
            onChange={handleUserInfo}
            description={
              userInfo.phone && validateState.isRegisteredPhone
                ? '이미 가입된 전화번호입니다!'
                : ''
            }
            error={Boolean(
              userInfo.phone && validateState.isRegisteredPhone
                ? '이미 가입된 전화번호입니다!'
                : ''
            )}
          >
            휴대폰
          </TextForm>

          <TextForm
            type="date"
            id="birth"
            name="birth"
            onChange={handleUserInfo}
          >
            생년월일
          </TextForm>

          <div className="flex h-[64px] flex-row items-center gap-4 rounded-5xl border-[1px] border-bjgray-100 bg-bjgray-100 px-4 focus-within:border-bjgray-500">
            <fieldset className="flex flex-grow flex-col">
              <legend className="text-b-2-regular text-bjgray-500">성별</legend>
              <div className="inline-flex justify-evenly gap-4">
                <RadioForm
                  value="male"
                  name="gender"
                  checked={userInfo.gender === 'male'}
                  onChange={handleUserInfo}
                >
                  남자
                </RadioForm>
                <RadioForm
                  value="female"
                  name="gender"
                  checked={userInfo.gender === 'female'}
                  onChange={handleUserInfo}
                >
                  여자
                </RadioForm>
              </div>
            </fieldset>
          </div>
        </Form>
      </div>
      <div className="mt-auto p-4">
        <MainButton
          as="button"
          disabled={
            !(
              !validateState.isRegisteredPhone &&
              userInfo.birth &&
              userInfo.gender &&
              !validateState.isDuplicatedNickname
            )
          }
          onClick={async () => await handleSubmit()}
        >
          다음
        </MainButton>
      </div>
    </div>
  );
}
