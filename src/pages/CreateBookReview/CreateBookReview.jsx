import {
  ImageForm,
  MainButton,
  NomalTitle,
  TextForm,
} from '@/components/Atoms';
import { useState } from 'react';
import pb from '@/api/pocketbase';
import { Form } from 'react-router-dom';
import { useCloseModal } from '@/hooks';
import { Helmet } from 'react-helmet-async';
import { useMutation } from '@tanstack/react-query';
import useUserInfoStore from '@/store/useUserInfoStore';
import { DobbleButtonModal } from '@/components/Molecules';
import { getDocumentTitle, createRandomId } from '@/utils';
import ReactQuill from 'react-quill';
/*
1.pb api data 
  const data = {
    "writer": "RELATION_RECORD_ID",( 필수 )
    "title": "test", ( 필수 )
    "detail": "test", ( 필수 )
    "bookTitle": "test"
};
2. 다음 버튼이 링크가 아니라 버튼 ! 
3. 등록 성공하면 모달-> 홈 화면으로 이동? / 상세페이지로 이동 ! 
4. title, detail이 없으면 submit 통신 방지 => disabled 해버림 ! 

*/

const style = {
  div: 'flex flex-col gap-2',
  span: 'px-2 text-b-2-regular text-bjgray-500',
};

export function CreateBookReview() {
  const { userInfo } = useUserInfoStore((state) => state);
  const INITIAL_DATA = {
    id: createRandomId(),
    writer: userInfo.id,
    detail: '',
    title: '',
  };
  const [bookReviewForm, setBookReviewForm] = useState(INITIAL_DATA);
  const [isModalState, setIsModalState] = useState(false);
  useCloseModal(isModalState, () => {
    setIsModalState(false);
  });

  const handleReviewForm = {
    set: (e) => {
      if (!e.target) {
        setBookReviewForm({ ...bookReviewForm, detail: e });
        return;
      }
      setBookReviewForm({ ...bookReviewForm, [e.target.id]: e.target.value });
    },
    imageSet: ({ target: { files } }) => {
      setBookReviewForm({ ...bookReviewForm, img: files[0] });
    },
    imageRemove: (e) => {
      e.preventDefault();
      setBookReviewForm({ ...bookReviewForm, img: null });
    },
  };

  const { mutateAsync: submitReview } = useMutation({
    mutationFn: async () => {
      await pb.collection('bookReview').create(bookReviewForm);
    },
    onSuccess: () => setIsModalState(true),
  });

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('독후감 쓰기')}</title>
      </Helmet>
      <div className="flex min-h-svh flex-col">
        <NomalTitle backLink path="mainBookReview">
          독후감 작성하기
        </NomalTitle>
        <main className="flex flex-grow flex-col justify-between px-4">
          <Form className="flex flex-col gap-6">
            <h2 className="py-4 text-h-2-semibold">읽은 책을 소개해주세요.</h2>
            <ImageForm
              id="img"
              onChange={handleReviewForm.imageSet}
              onClick={handleReviewForm.imageRemove}
              src={bookReviewForm.img}
            />
            <div className={`${style['div']}`}>
              <TextForm
                id="bookTitle"
                placeholder="책 제목을 입력해주세요(필수)"
                hiddenLabel
                onChange={handleReviewForm.set}
              >
                읽은 책 제목
              </TextForm>
              <span className={`${style['span']}`}>예시) 동물농장</span>
            </div>
            <div className={`${style['div']}`}>
              <TextForm
                required
                placeholder="제목을 입력해 주세요. (필수)"
                hiddenLabel
                id="title"
                onChange={handleReviewForm.set}
              >
                독후감 제목
              </TextForm>
              <span className={`${style['span']}`}>
                독후감에 걸맞는 멋진 제목을 지어주세요 !
              </span>
            </div>
            <ReactQuill id="detail" onChange={handleReviewForm.set} />
          </Form>

          <div>
            <MainButton
              onClick={async () => await submitReview()}
              as="button"
              color={
                bookReviewForm.img &&
                bookReviewForm.bookTitle &&
                bookReviewForm.title &&
                bookReviewForm.detail
                  ? 'primary'
                  : 'secondary'
              }
              className={'my-4'}
              disabled={
                !(
                  bookReviewForm.img &&
                  bookReviewForm.bookTitle &&
                  bookReviewForm.title &&
                  bookReviewForm.detail
                )
              }
            >
              등록
            </MainButton>
          </div>
        </main>
      </div>
      <DobbleButtonModal
        open={isModalState}
        title="독후감 작성 완료! "
        primaryButtonText="홈으로"
        primaryButtonPath="/mainBookReview"
        secondaryButtonText="내가 쓴 독후감 보기"
        secondaryButtonPath={`/mainBookReview/${bookReviewForm.id}`}
      >
        작성한 독후감을 확인해보세요
      </DobbleButtonModal>
    </>
  );
}
