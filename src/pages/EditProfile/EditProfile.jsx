import { Helmet } from 'react-helmet-async';
import { getDocumentTitle } from '@/utils';
import {
  NomalTitle,
  ImageForm,
  TextForm,
  MainButton,
} from '@/components/Atoms';
import { Form } from 'react-router-dom';
export function EditProfile() {
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('프로필 수정')}</title>
      </Helmet>
      <div className="relative flex h-svh w-full flex-col  ">
        <NomalTitle backLink path="/myPage">
          프로필 수정
        </NomalTitle>
        <Form className="flex flex-col gap-4 px-4" method="post">
          <span>프로필 사진</span>
          <ImageForm id="img" name="img" />
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
          </TextForm>{' '}
          <MainButton as="button" type="submit">
            저장
          </MainButton>
        </Form>
      </div>
    </>
  );
}
