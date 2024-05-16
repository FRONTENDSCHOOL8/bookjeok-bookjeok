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
import { useDebounce, useCloseModal } from '@/hooks';
import { UsersResponse } from '@/types/pocketbase-types';
import useUserInfoStore from '@/store/useUserInfoStore';
import { DobbleButtonModal } from '@/components/Molecules';
import { useQuery, useMutation } from '@tanstack/react-query';
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
  const userId = useUserInfoStore((state) => state.userInfo?.id);
  const setUserInfo = useUserInfoStore((state) => state.setUserInfo);
  const [editUserInfo, setEditUserInfo] = useState<EditUserInfo>();
  const debouncedData = useDebounce(editUserInfo, 700);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useCloseModal(isModalOpen, () => {
    setIsModalOpen(false);
  });

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
    if (!target) return;
    if (target.name === 'img' && target.files) {
      setEditUserInfo({ ...editUserInfo, img: target.files[0] });
    } else {
      setEditUserInfo({ ...editUserInfo, [target.name]: target.value });
    }
  };

  //이미지 삭제 버튼 클릭이벤트
  const handleReviewImage = {
    remove: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
      e.preventDefault();
      setEditUserInfo({ ...setEditUserInfo, img: undefined });
    },
  };

  //수정 실행하는 mutation
  const { mutateAsync: updateUsers, isSuccess } = useMutation({
    mutationFn: async () => {
      const userData = await pb
        .collection('users')
        .update(`${userId}`, editUserInfo);
      return userData;
    },
    onSuccess: (userData) => {
      setUserInfo(userData);
      setIsModalOpen(true);
    },
  });
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
            src={editUserInfo ? editUserInfo.img : null}
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
        </Form>
        <MainButton
          className="mb-4 mt-auto"
          onClick={async () => {
            await updateUsers();
          }}
        >
          변경하기
        </MainButton>
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
          title="잠시후 다시 이용해 주세요."
        ></DobbleButtonModal>
      )}
    </>
  );
}
