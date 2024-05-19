import gsap from 'gsap';
import pb from '@/api/pocketbase';
import { useGSAP } from '@gsap/react';
import { useLayoutEffect, useRef } from 'react';
import { Comment } from '@/components/Molecules';
import { useMutation } from '@tanstack/react-query';
import { ChatTextarea, Svg } from '@/components/Atoms';
import useUserInfoStore from '@/store/useUserInfoStore';
import { useNavigate, useParams } from 'react-router-dom';

const BookReviewComment = () => {
  const navigate = useNavigate();
  const { bookreviewId } = useParams();
  const userId = useUserInfoStore((state) => state.userInfo?.id);
  const textarea = useRef<HTMLTextAreaElement>(null);

  const { mutate: createComments } = useMutation({
    mutationFn: async () => {
      const data = {
        bookReviewId: bookreviewId,
        content: textarea.current?.value,
        author: userId,
      };
      await pb.collection('comments').create(data);
    },
  });

  const handleBackbutton = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    e.preventDefault();
    navigate('..');
  };

  const hadleTextarea = (
    e: React.MouseEvent<HTMLButtonElement> | KeyboardEvent
  ) => {
    // e.preventDefault();
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
          onClick={async () => createComments()}
        />
      </dialog>
    </>
  );
};

export default BookReviewComment;
