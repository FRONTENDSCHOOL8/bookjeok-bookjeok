import { useState } from 'react';
import pb from '@/api/pocketbase';
import { Form } from 'react-router-dom';
import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { useMutation } from '@tanstack/react-query';
import useUserInfoStore from '@/store/useUserInfoStore';
import { DobbleButtonModal } from '@/components/Molecules';
import { MainButton, NomalTitle, TextForm } from '@/components/Atoms';

interface PasswordType {
  oldPassword?: string;
  password?: string;
  passwordConfirm?: string;
}
interface ErrorObj {
  img?: {};
  password?: {};
  passwordConfirm?: {};
}

interface Error {
  code: number;
  message: string;
  data: { data: ErrorObj };
}
interface HandleType {
  (e: React.ChangeEvent<HTMLFormElement>): void;
}
interface ErrorTT {
  title:
    | 'Missing or invalid old password.'
    | 'The length must be between 8 and 72.'
    | 'Cannot be blank.'
    | "Values don't match."
    | 'validation_file_size_limit';
}
const error = {
  'Missing or invalid old password.': '기존 비밀번호를 확인해주세요.',
  'The length must be between 8 and 72.':
    '비밀번호는 8자 이상 영문, 숫자, 특수문자를 포함해 작성해주세요',
  'Cannot be blank.': '비밀번호에 해당하는 입력창은 모두 입력해주세요.',
  "Values don't match.": '비밀번호가 일치하지 않습니다.',
  validation_file_size_limit: '지원하지 않는 이미지 사이즈 입니다.',
};

export function ModifyPassword() {
  const userId = useUserInfoStore((state) => state.userInfo?.id);
  const setUserInfo = useUserInfoStore((state) => state.setUserInfo);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modifyPw, setModifyPw] = useState<PasswordType>();
  const [errorContents, setErrorContents] = useState<ErrorTT>();

  const { mutateAsync: updateUsers, isSuccess } = useMutation({
    mutationFn: async () => {
      const userData = await pb
        .collection('users')
        .update(`${userId}`, modifyPw);
      return userData;
    },
    onSuccess: (userData) => {
      setUserInfo(userData);
      setIsModalOpen(true);
    },
    onError: (error: Error) => {
      setErrorContents({ title: Object.values(error.data.data)[0].message });
      setIsModalOpen(true);
    },
  });
  const handleEditForm: HandleType = (e) => {
    const target = e.target.closest('input');
    console.log(target);
    if (!target) return;
    else {
      setModifyPw({ ...modifyPw, [target.name]: target.value });
    }
  };

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('회원정보 수정')}</title>
      </Helmet>
      <div className="relative flex min-h-svh w-full flex-col ">
        <NomalTitle backLink path="myPage">
          비밀번호 변경
        </NomalTitle>
        <Form className="flex flex-col gap-4 p-4" onChange={handleEditForm}>
          <TextForm
            type="password"
            id="oldPassword"
            name="oldPassword"
            autoComplete="off"
          >
            현재 비밀번호
          </TextForm>
          <TextForm
            type="password"
            id="password"
            name="password"
            autoComplete="off"
          >
            변경할 비밀번호
          </TextForm>
          <TextForm
            id="passwordConfirm"
            type="password"
            name="passwordConfirm"
            autoComplete="off"
          >
            비밀번호 확인
          </TextForm>
        </Form>
        <div className="mt-auto p-4">
          <MainButton
            className="mt-auto"
            onClick={async () => await updateUsers()}
          >
            {' '}
            변경
          </MainButton>
        </div>
      </div>
      {isSuccess ? (
        <DobbleButtonModal
          svgId="logo"
          title="변경성공 ! "
          open={isModalOpen}
          closeButton
          onClick={() => setIsModalOpen(false)}
          primaryButtonText="홈으로"
          primaryButtonPath={'/main/club'}
          secondaryButtonText="마이페이지로"
          secondaryButtonPath={'/myPage'}
        ></DobbleButtonModal>
      ) : (
        <DobbleButtonModal
          svgId="alert"
          open={isModalOpen}
          closeButton
          onClick={() => setIsModalOpen(false)}
          title={errorContents ? error[`${errorContents.title}`] : ''}
        ></DobbleButtonModal>
      )}
    </>
  );
}
