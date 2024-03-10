import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { getDocumentTitle } from '@/utils';
import {
  NomalTitle,
  ImageForm,
  TextForm,
  MainButton,
} from '@/components/Atoms';
import { Form, useParams } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import pb from '@/api/pocketbase';
import useUserInfoStore from '@/store/useUserInfoStore';

const test = {
  nickname: '하이로로',
  password: 'qwert123!',
  passwordConfirm: 'qwert123!',
  oldPassword: 'qwert123!',
};

export function EditProfile() {
  const { userId } = useParams();
  const { setUserInfo } = useUserInfoStore((state) => state);
  const [editUserInfo, setEditUserInfo] = useState({});

  // const { data } = useQuery({
  //   queryFn: async (nickname) => {
  //     await pb
  //       .collection('users')
  //       .getList(1, 1, { filter: `nickname = "${nickname}"` });
  //   },
  //   queryKey: ['nickname'],
  // });

  const { mutateAsync: updateUsers } = useMutation({
    mutationFn: async () => {
      const userData = await pb
        .collection('users')
        .update(`${userId}`, editUserInfo);
      setUserInfo(userData);
    },
  });

  const handleEditForm = (e) => {
    const target = e.target.closest('input');
    if (!target) return;
    if (target.name === 'img') {
      setEditUserInfo({ ...editUserInfo, img: target.files[0] });
    } else {
      setEditUserInfo({ ...editUserInfo, [target.name]: target.value });
    }
  };

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('프로필 수정')}</title>
      </Helmet>
      <div className="relative flex h-svh w-full flex-col  ">
        <NomalTitle backLink path="/myPage">
          프로필 수정
        </NomalTitle>
        <Form className="flex flex-col gap-4 px-4" onChange={handleEditForm}>
          <span>프로필 사진</span>
          <ImageForm id="img" name="img" src={editUserInfo?.img} />
          <TextForm type="text" id="nickname" name="nickname">
            닉네임
          </TextForm>
          <TextForm
            type="password"
            id="oldPassword"
            name="oldPassword"
            autoComplete="off"
          >
            이전 비밀번호
          </TextForm>
          <TextForm
            type="password"
            id="password"
            name="password"
            autoComplete="off"
          >
            비밀번호
          </TextForm>
          <TextForm
            id="passwordConfirm"
            type="password"
            name="passwordConfirm"
            autoComplete="off"
          >
            비밀번호 확인
          </TextForm>
          <MainButton
            as="button"
            onClick={async () => {
              await updateUsers();
            }}
          >
            저장
          </MainButton>
        </Form>
      </div>
    </>
  );
}
