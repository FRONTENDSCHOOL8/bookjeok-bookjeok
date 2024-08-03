import gsap from 'gsap';
import Comments from './Comments';
import pb from '@/api/pocketbase';
import { useGSAP } from '@gsap/react';
import { createRandomId } from '@/utils';
import { queryClient } from '@/client/queryClient';
import { useMutation } from '@tanstack/react-query';
import useBRReplyStore from '@/store/useBRReplyStore';
import { useInView } from 'react-intersection-observer';
import useUserInfoStore from '@/store/useUserInfoStore';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useLayoutEffect, useRef } from 'react';
import { CommentsResponse } from '@/types/pocketbase-types';
import useBookReviewCommentsQuery from './useBookReviewCommentsQuery';
import { ChatTextarea, Svg, BlankContents } from '@/components/Atoms';

export const BookReviewComment = () => {
  const { setReplyTo, replyTo } = useBRReplyStore((state) => state);
  const navigate = useNavigate();
  const [ref, inView] = useInView();
  const { bookreviewId } = useParams();
  const user = useUserInfoStore((state) => state.userInfo ?? { id: '' });
  const userId = user.id;
  const textarea = useRef<HTMLTextAreaElement>(null);
  const { commentsData, fetchNextPage } = useBookReviewCommentsQuery(
    bookreviewId as string
  );

  // 쿼리 키
  const QUERY_KEY = ['BRcomments', bookreviewId];

  const commentsList = commentsData
    ? commentsData.pages.flatMap((page) => page.items)
    : [];

  const { mutateAsync: pushLike } = useMutation<
    void,
    Error,
    [string[], string]
  >({
    mutationFn: async ([likePeoples, id]) => {
      if (userId && likePeoples.includes(userId)) {
        const updateLike = {
          likePeoples: likePeoples.filter((item) => item !== userId),
        };
        await pb.collection('comments').update(id, updateLike);
      } else {
        const updateLike = {
          likePeoples: [...likePeoples, userId],
        };
        await pb.collection('comments').update(id, updateLike);
      }
    },
    onSettled: () =>
      queryClient.invalidateQueries({ queryKey: ['BRcomments', bookreviewId] }),
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
          pb.collection('comments').update(commentsInfo.id, updateComments),
          pb.collection('comments').create(replyMessage),
        ]);
      } else {
        await pb.collection('comments').create(newMessage);
      }
    },

    onMutate: async ([newComment]) => {
      await queryClient.cancelQueries({ queryKey: QUERY_KEY });

      const previousSnapshot: any = queryClient.getQueryData(QUERY_KEY);

      queryClient.setQueryData(QUERY_KEY, (prevData: any) => {
        const optimisticCommentData = {
          ...newComment,
          expand: {
            author: user,
          },
          created: new Date().toISOString().replace('T', ' '),
        };

        const nextData = {
          ...prevData,
          pages: [
            {
              ...prevData.pages[0],
              items: [optimisticCommentData, ...prevData.pages[0].items],
            },
          ],
        };

        return nextData;
      });

      return { previousSnapshot };
    },

    onError: (_error, _data, context) => {
      queryClient.setQueryData(QUERY_KEY, (context as any)?.previousComments);
    },

    onSettled: async () => {
      // queryClient.invalidateQueries({
      //   queryKey: QUERY_KEY,
      // });

      await queryClient.refetchQueries({ queryKey: QUERY_KEY, type: 'active' });
    },

    onSuccess: () => {
      const commentElement = document.getElementById(
        'comment'
      ) as HTMLInputElement;

      commentElement.value = '';
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
  // const hadleTextarea = (
  //   e: React.MouseEvent<HTMLButtonElement> | KeyboardEvent
  // ) => {
  //   e.preventDefault();
  // };

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  });

  return (
    <>
      <div
        onClick={handleBackbutton}
        className="fixed top-0 z-[100] h-svh w-full max-w-[430px] bg-bjblack bg-opacity-90"
      />
      <dialog
        className="modal fixed bottom-0 z-[100] h-[60%] w-full max-w-[430px] overflow-hidden rounded-t-9xl bg-white px-4"
        open={true}
      >
        <div className="flex h-full flex-col">
          <div>
            <button onClick={handleBackbutton}>
              <div className="my-4">
                <Svg id="close" />
              </div>
            </button>
            <h2 className="sr-only">댓글</h2>
          </div>
          <div className="flex-auto overflow-y-auto pr-2">
            <section className="h-full">
              {commentsList.length ? (
                commentsList.map(
                  ({
                    expand,
                    id,
                    content,
                    created,
                    replyIdArray,
                    likePeoples,
                  }) => (
                    <Comments
                      key={id}
                      author={expand?.author}
                      id={id}
                      content={content}
                      created={created}
                      replyIdArray={replyIdArray}
                      createReplyFn={() =>
                        setReplyTo(id, expand?.author.nickname)
                      }
                      likePeoples={likePeoples}
                      pushLikeButton={() => pushLike([likePeoples, id])}
                    />
                  )
                )
              ) : (
                <BlankContents title="여긴 조용하네요...">
                  먼저 말을 건네 보는 건 어떨까요?
                </BlankContents>
              )}

              <div ref={ref} />
            </section>
          </div>
          <div className="mt-auto flex flex-auto pb-4">
            <ChatTextarea
              forwardRef={textarea}
              label="commentTextarea"
              name="commentTextarea"
              id="comment"
              placeholder="댓글을 입력해주세요."
              onClick={handleSubmit}
              className="w-full self-end"
            />
          </div>
        </div>
      </dialog>
    </>
  );
};
