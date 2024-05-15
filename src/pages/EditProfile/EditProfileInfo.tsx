import {
  ImageForm,
  MainButton,
  NomalTitle,
  TextForm,
} from '@/components/Atoms';
import { useState } from 'react';
import pb from '@/api/pocketbase';
import { Form } from 'react-router-dom';
import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import { useDebounce, useCloseModal } from '@/hooks';
import { UsersResponse } from '@/types/pocketbase-types';
import { DobbleButtonModal } from '@/components/Molecules';

interface EditUserInfo {
  img?: File | undefined;
  nickname?: string;
  number?: number;
  password?: string;
}
interface HandleType {
  (e: React.ChangeEvent<HTMLFormElement>): void;
}
export function EditProfileInfo() {
  const [userInfo, setUserInfo] = useState<EditUserInfo>();
  const debouncedData = useDebounce(userInfo, 700);
  //닉네임 중복 확인
  const { data: hasDuplicatedNickname } = useQuery({
    queryFn: async () => {
      const fetchedData = await pb
        .collection('users')
        .getList<UsersResponse>(1, 1, {
          filter: `nickname = "${debouncedData.nickname}"`,
        });
      return fetchedData.items;
    },
    queryKey: ['nickname', debouncedData.nickname],
    enabled: !!debouncedData.nickname,
  });

  // 회원정보 변경 이벤트 함수
  const handleEditForm: HandleType = (e) => {
    const target = e.target.closest('input');
    console.log(target);
    if (!target) return;
    if (target.name === 'img' && target.files) {
      setUserInfo({ ...userInfo, img: target.files[0] });
    } else {
      setUserInfo({ ...userInfo, [target.name]: target.value });
    }
  };

  //이미지 삭제 버튼 클릭이벤트
  const handleReviewImage = {
    remove: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
      e.preventDefault();
      setUserInfo({ ...setUserInfo, img: undefined });
    },
  };
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('회원정보 수정')}</title>
      </Helmet>
      <div className="relative flex min-h-svh w-full flex-col ">
        <NomalTitle backLink path="/myPage">
          프로필 수정
        </NomalTitle>
        <Form className="flex flex-col gap-4 p-4" onChange={handleEditForm}>
          <ImageForm
            required={false}
            id="img"
            name="img"
            srOnly="프로필 사진 변경"
            src={userInfo ? userInfo.img : null}
            onClick={handleReviewImage.remove}
          />

          <TextForm
            autoComplete="off"
            type="text"
            id="nickname"
            name="nickname"
            description={
              hasDuplicatedNickname && hasDuplicatedNickname?.length > 0
                ? '이미 사용 중인 닉네임입니다.'
                : ''
            }
          >
            닉네임
          </TextForm>
          <TextForm type="number" id="number" name="number">
            휴대폰 번호
          </TextForm>
          <TextForm
            type="password"
            id="oldPassword"
            name="oldPassword"
            autoComplete="off"
          >
            비밀번호
          </TextForm>
        </Form>
        <MainButton className="mb-4 mt-auto">변경하기</MainButton>
      </div>
    </>
  );
}
