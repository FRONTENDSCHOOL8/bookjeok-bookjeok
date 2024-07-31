import { useState } from 'react';
import { getPbImgs } from '@/utils';
import fetchReply from './fetchReply';
import { getCreatedHoursAgo } from '@/utils';
import { Comment } from '@/components/Molecules';
import { Texpand } from './useBookReviewCommentsQuery';
import { CommentsResponse, UsersResponse } from '@/types/pocketbase-types';
import useUserInfoStore from '@/store/useUserInfoStore';

type CommentsType = {
  author?: UsersResponse;
  replyIdArray: string[];
  content?: string;
  id: string;
  created: string;
  key?: string;
  likePeoples: string[];
  createReplyFn?: () => void;
  pushLikeButton: ([]) => Promise<void>;
};

const Comments = ({
  author,
  replyIdArray,
  content,
  id,
  created,
  createReplyFn,
  likePeoples,
  pushLikeButton,
}: CommentsType) => {
  const [reply, setReply] = useState<CommentsResponse<Texpand>[]>([]);
  const userId = useUserInfoStore((state) => state.userInfo?.id);
  const handleReply = async (parentId: string) => {
    const replyArray = await fetchReply(parentId);
    setReply(replyArray);
  };

  return (
    <div className="flex flex-col">
      {/*본댓글 */}
      <Comment
        src={getPbImgs(author)}
        nickName={author?.nickname}
        text={content}
        time={getCreatedHoursAgo(created)}
        isNotReply
        createReplyFn={createReplyFn}
        replyIdArray={Boolean(replyIdArray?.length > 0)}
        showReply={() => handleReply(id)}
        shownStateReply={reply}
        like={likePeoples?.length === 0 ? undefined : likePeoples?.length}
        active={Boolean(likePeoples?.find((item) => item === userId))}
        pushLikeButton={() => pushLikeButton([id, likePeoples])}
      />
      {/*리댓글 있으면 */}
      {reply?.length > 0 ? (
        <div className="pl-8">
          {reply?.map(({ expand, likePeoples, content, id, created }) => (
            <Comment
              key={id}
              src={getPbImgs(expand?.author)}
              nickName={expand?.author.nickname}
              text={content}
              time={getCreatedHoursAgo(created)}
              like={likePeoples?.length === 0 ? undefined : likePeoples?.length}
              active={Boolean(likePeoples?.find((item) => item === userId))}
            />
          ))}
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default Comments;
