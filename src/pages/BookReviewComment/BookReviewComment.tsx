import { ChatTextarea, Svg } from '@/components/Atoms';
import { Comment } from '@/components/Molecules';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const BookReviewComment = () => {
  const { bookreviewId } = useParams();
  const navigate = useNavigate();

  const textarea = useRef(null);
  const handleBackbutton = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    e.preventDefault();
    navigate('..');
  };

  const hadleTextarea = (
    e: React.MouseEvent<HTMLButtonElement> | KeyboardEvent
  ) => {
    e.preventDefault();
  };
  // 윈도우 스크롤바 숨기기
  useLayoutEffect(() => {
    document.documentElement.style.overflowY = 'hidden';
    return () => {
      document.documentElement.style.removeProperty('overflow-y');
    };
  });

  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from('.modal', { y: '100%' });
  });

  return (
    <>
      <div
        onClick={handleBackbutton}
        className="fixed top-0 z-[100] h-svh w-full max-w-[430px] bg-bjblack bg-opacity-90"
      />
      <dialog
        className="modal fixed bottom-0 z-[100] h-[60%] w-full max-w-[430px] overflow-hidden rounded-t-9xl bg-white px-4 "
        open={true}
      >
        <button onClick={handleBackbutton}>
          <div className="my-4">
            <Svg id="close" />
          </div>
        </button>
        <h2 className=" sr-only">댓글</h2>
        <section className="h-[70%] overflow-y-auto">
          <Comment src="" nickName="test" time="" text="안녕하세요" />
          <Comment src="" nickName="test" time="" text="안녕하세요" />
          <Comment src="" nickName="test" time="" text="안녕하세요" />
          <Comment src="" nickName="test" time="" text="안녕하세요" />
          <Comment src="" nickName="test" time="" text="안녕하세요" />
          <Comment src="" nickName="test" time="" text="안녕하세요" />
          <Comment src="" nickName="test" time="" text="안녕하세요" />
          <Comment src="" nickName="test" time="" text="안녕하세요" />
          <Comment src="" nickName="test" time="" text="안녕하세요" />
          <Comment src="" nickName="test" time="" text="안녕하세요" />
          <Comment src="" nickName="test" time="" text="안녕하세요" />
          <Comment src="" nickName="test" time="" text="안녕하세요" />
          <Comment src="" nickName="test" time="" text="안녕하세요" />
          <Comment src="" nickName="test" time="" text="안녕하세요" />
          <Comment src="" nickName="test" time="" text="안녕하세요" />
        </section>
        <ChatTextarea
          forwardRef={textarea}
          label="commentTextarea"
          name="commentTextarea"
          id="comment"
          placeholder="댓글을 입력해주세요."
          onClick={hadleTextarea}
        />
      </dialog>
    </>
  );
};

export default BookReviewComment;
