import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';
import {
  ImageForm,
  MainButton,
  NomalTitle,
  TextForm,
  Textarea,
} from '@/components/Atoms';
function CreateBookReview() {
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('독후감 쓰기')}</title>
      </Helmet>
      <main className="flex h-svh flex-col justify-between px-4">
        <form className="flex flex-col gap-6">
          <NomalTitle backLink subText="3 of 4">
            모임 만들기
          </NomalTitle>
          <h2 className="p-4 text-h-2-semibold">읽은 책을 소개해주세요.</h2>
          <ImageForm />
          <div className="flex flex-col gap-2">
            <TextForm
              required
              placeholder="제목을 입력해 주세요. (필수)"
              hiddenLabel
            >
              모임제목
            </TextForm>
            <span className="px-2 text-b-2-regular text-bjgray-500">
              독후감에 걸맞는 멋진 제목을 지어주세요 !
            </span>
          </div>
          <Textarea
            placeholder="내용을 입력해 주세요. (필수)"
            label="모임 상세내용"
          />
        </form>
        <div>
          <MainButton className="my-4" color="primary">
            다음
          </MainButton>
        </div>
      </main>
    </>
  );
}

export default CreateBookReview;
