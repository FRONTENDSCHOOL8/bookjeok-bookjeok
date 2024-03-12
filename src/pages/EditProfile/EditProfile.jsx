import {
  NomalTitle,
  ImageForm,
  TextForm,
  MainButton,
} from '@/components/Atoms';
import { useState } from 'react';
import pb from '@/api/pocketbase';
import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { Form, useParams } from 'react-router-dom';
import { useDebounce, useCloseModal } from '@/hooks';
import useUserInfoStore from '@/store/useUserInfoStore';
import { DobbleButtonModal } from '@/components/Molecules';
import { useQuery, useMutation } from '@tanstack/react-query';

/*
1. duplicated 닉네임일 경우 하단에 에러메시지
2. 이미지 / 닉네임만 변경하고자 하면 이전비밀번호,비밀번호,비밀번호 확인 안해도 되는데 
  비밀번호를 변경하고자 하면 저 세가지 항목들을 다 해야됨 ! 
  => 이미지/닉네임 변경시 그냥 

*/

const error = {
  'Missing or invalid old password.': '기존 비밀번호를 확인해주세요.',
  'The length must be between 8 and 72.':
    '비밀번호는 8자 이상 영문, 숫자, 특수문자를 포함해 작성해주세요',
  'Cannot be blank.': '비밀번호에 해당하는 입력창은 모두 입력해주세요.',
  "Values don't match.": '비밀번호가 일치하지 않습니다.',
  validation_file_size_limit: '지원하지 않는 이미지 사이즈 입니다.',
};

export function EditProfile() {
  const { userId } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorContents, setErrorContents] = useState({});
  const [editUserInfo, setEditUserInfo] = useState(null);
  const debouncedData = useDebounce(editUserInfo, 700);
  const { setUserInfo } = useUserInfoStore((state) => state);

  useCloseModal(isModalOpen, () => {
    setIsModalOpen(false);
  });

  //이미지 지우는법
  const handleReviewImage = {
    remove: (e) => {
      e.preventDefault();
      setEditUserInfo({ ...setEditUserInfo, img: null });
    },
  };

  //중복 닉네임 확인
  const { data: hasDuplicatedNickname } = useQuery({
    queryFn: async () => {
      const fetchedData = await pb
        .collection('users')
        .getList(1, 1, { filter: `nickname = "${debouncedData.nickname}"` });
      return fetchedData.items;
    },
    queryKey: ['nickname', debouncedData.nickname],
    //최초실행 방지
    enabled: !!debouncedData.nickname,
  });

  // 수정 실행하는 mutation 함수
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
    onError: (error) => {
      if (Object.keys(error.data.data)[0] === 'img') {
        setErrorContents({ title: Object.values(error.data.data)[0].code });
      } else {
        setErrorContents({ title: Object.values(error.data.data)[0].message });
      }
      setIsModalOpen(true);
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
      <div className="relative flex min-h-svh w-full flex-col ">
        <NomalTitle backLink path="/myPage">
          프로필 수정
        </NomalTitle>

        <Form className="flex flex-col gap-4 p-4" onChange={handleEditForm}>
          <ImageForm
            required={false}
            id="img"
            name="img"
            onClick={handleReviewImage.remove}
            src={editUserInfo?.img}
            srOnly="프로필 사진 변경"
          />
          <TextForm
            type="text"
            id="nickname"
            name="nickname"
            description={
              hasDuplicatedNickname?.length > 0
                ? '이미 사용 중인 닉네임입니다.'
                : ''
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
            as="button"
            color={
              editUserInfo && hasDuplicatedNickname?.length == 0
                ? 'primary'
                : 'secondary'
            }
            disabled={!editUserInfo || hasDuplicatedNickname?.length > 0}
            onClick={async () => {
              await updateUsers();
            }}
          >
            저장
          </MainButton>
        </div>
        {isSuccess ? (
          <DobbleButtonModal
            svgId="logo"
            title="변경성공 ! "
            open={isModalOpen}
            closeButton
            onClick={() => setIsModalOpen(false)}
            primaryButtonText="홈으로 이동하기"
            primaryButtonPath={'/mainClub'}
            secondaryButtonText="마이페이지로 이동하기"
            secondaryButtonPath={'/myPage'}
          ></DobbleButtonModal>
        ) : (
          <DobbleButtonModal
            svgId="alert"
            open={isModalOpen}
            closeButton
            onClick={() => setIsModalOpen(false)}
            title={error[`${errorContents.title}`]}
          ></DobbleButtonModal>
        )}
      </div>
    </>
  );
}
