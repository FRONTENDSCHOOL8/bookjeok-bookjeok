import { useState } from 'react';
import { getPbImgs } from '@/utils';
import fetchReply from './fetchReply';
import { getCreatedHoursAgo } from '@/utils';
import { Comment } from '@/components/Molecules';
import { Texpand } from './useBookReviewCommentsQuery';
import { CommentsResponse, UsersResponse } from '@/types/pocketbase-types';

type CommentsType = {
  author?: UsersResponse;
  replyIdArray: string[];
  content?: string;
  id: string;
  created: string;
  key?: string;
  createReplyFn?: () => void;
};

const Comments = ({
  author,
  replyIdArray,
  content,
  id,
  created,
  createReplyFn,
}: CommentsType) => {
  const [reply, setReply] = useState<CommentsResponse<Texpand>[]>([]);

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
        replyIdArray={Boolean(replyIdArray.length > 0)}
        showReply={() => handleReply(id)}
        shownStateReply={reply}
      />
      {/*리댓글 있으면 */}
      {reply?.length > 0 ? (
        <div className="pl-4">
          {reply?.map(({ expand, content, id, created }) => (
            <Comment
              key={id}
              src={getPbImgs(expand?.author)}
              nickName={expand?.author.nickname}
              text={content}
              time={getCreatedHoursAgo(created)}
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
