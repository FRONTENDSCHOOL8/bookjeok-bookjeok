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
import { useDebounce } from '@/hooks';
/*
1. duplicated 닉네임일 경우 하단에 에러메시지
2. 



*/
export function EditProfile() {
  const { userId } = useParams();
  const { setUserInfo } = useUserInfoStore((state) => state);
  const [editUserInfo, setEditUserInfo] = useState({});
  const debouncedData = useDebounce(editUserInfo, 700);
  console.log('debounced:', debouncedData);
  const [isDuplicatedNickname, setIsDuplicatedNickname] = useState(false);
  //중복 닉네임 확인
  const { data: hasDuplicatedNickname, isSuccess } = useQuery({
    queryFn: async () => {
      const fetchedData = await pb
        .collection('users')
        .getList(1, 1, { filter: `nickname = "${debouncedData.nickname}"` });
      return fetchedData.items; // 데이터 반환
    },
    queryKey: ['nickname', debouncedData.nickname],
    //최초실행 방지
    enabled: !!debouncedData.nickname,
  });

  console.log(hasDuplicatedNickname?.length);

  // 수정 실행하는 mutation 함수
  const { mutateAsync: updateUsers } = useMutation({
    mutationFn: async () => {
      const userData = await pb
        .collection('users')
        .update(`${userId}`, editUserInfo);
      return userData;
    },
    onSuccess: (userData) => {
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
          <TextForm
            type="text"
            id="nickname"
            name="nickname"
            description={
              hasDuplicatedNickname?.length > 0 ? '중복된 닉네임임' : ''
            }
          >
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
