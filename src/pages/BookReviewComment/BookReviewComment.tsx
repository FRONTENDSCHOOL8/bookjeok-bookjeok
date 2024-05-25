import gsap from 'gsap';
import Comments from './Comments';
import pb from '@/api/pocketbase';
import { useGSAP } from '@gsap/react';
import { createRandomId } from '@/utils';
import { queryClient } from '@/client/queryClient';
import { useMutation } from '@tanstack/react-query';
import { useInView } from 'react-intersection-observer';
import { ChatTextarea, Svg } from '@/components/Atoms';
import useUserInfoStore from '@/store/useUserInfoStore';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { CommentsResponse } from '@/types/pocketbase-types';
import useBRReplyStore from '@/store/useBRReplyStore';
import useBookReviewCommentsQuery from './useBookReviewCommentsQuery';

const BookReviewComment = () => {
  const { setReplyTo, replyTo } = useBRReplyStore((state) => state);
  const navigate = useNavigate();
  const [ref, inView] = useInView();
  const { bookreviewId } = useParams();
  const userId = useUserInfoStore((state) => state.userInfo?.id);
  const textarea = useRef<HTMLTextAreaElement>(null);
  const { commentsData, fetchNextPage } = useBookReviewCommentsQuery(
    bookreviewId as string
  );
  const commentsList = commentsData
    ? commentsData.pages.flatMap((page) => page.items)
    : [];

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  });

  //댓글 생성
  const { mutateAsync: createComments } = useMutation<
    void,
    Error,
    [CommentsResponse, CommentsResponse]
  >({
    mutationFn: async ([newMessage, commentsInfo]) => {
      if (commentsInfo) {
        const data = {
          replyToId: replyTo.id,
        };
        const replyMessage = { ...newMessage, ...data };
        const updateComments = {
          replyIdArray: [...commentsInfo.replyIdArray, newMessage.id],
        };
        await Promise.all([
          pb.collection('comments').update(`${replyTo.id}`, updateComments),
          pb.collection('comments').create(replyMessage),
        ]);
      } else {
        await pb.collection('comments').create(newMessage);
      }
    },
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: ['BRcomments'] }),
    onSuccess: () => {
      (document.getElementById('comment') as HTMLInputElement).value = '';
    },
  });

  const handleSubmit = async () => {
    // replyTo의 id의 작성자가 replyTo.nickname과 일치하면 리댓글.
    const isThisReply = commentsList.filter(
      (item) =>
        replyTo.id === item.id &&
        replyTo.nickname === item.expand?.author.nickname
    )[0];
    const newComment = {
      id: createRandomId(),
      bookReviewId: bookreviewId,
      content: `${replyTo.nickname ? `@${replyTo.nickname} ` : ''}${textarea.current?.value}`,
      author: userId,
    };
    await createComments([newComment as CommentsResponse, isThisReply]);
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
          {commentsList.map(
            ({ expand, id, content, created, replyIdArray }) => (
              <Comments
                key={id}
                author={expand?.author}
                id={id}
                content={content}
                created={created}
                replyIdArray={replyIdArray}
                createReplyFn={() => setReplyTo(id, expand?.author.nickname)}
              />
            )
          )}
          <div ref={ref} />
        </section>
        <ChatTextarea
          forwardRef={textarea}
          label="commentTextarea"
          name="commentTextarea"
          id="comment"
          placeholder="댓글을 입력해주세요."
          onClick={handleSubmit}
        />
      </dialog>
    </>
  );
};

export default BookReviewComment;
