import {
  CommentLikeButton,
  CommentNickname,
  CommentText,
  RoundImage,
} from '@/components/Atoms';
import { CommentsResponse } from '@/types/pocketbase-types';
import { Texpand } from '@/pages/BookReviewComment/useBookReviewCommentsQuery';
interface CommentType {
  replyIdArray?: boolean;
  shownStateReply?: CommentsResponse<Texpand>[];
  className?: string;
  src: string;
  nickName?: string;
  time?: string;
  text?: string;
  active?: boolean;
  like?: number;
  isNotReply?: boolean;
  createReplyFn?: () => void;
  showReply?: () => Promise<void>;
}

function Comment({
  className = '',
  src,
  nickName,
  time,
  text,
  active,
  like,
  isNotReply,
  createReplyFn,
  replyIdArray,
  showReply,
  shownStateReply,
}: CommentType) {
  return (
    <div className={`my-2 flex gap-x-4 ${className}`}>
      <div>
        <RoundImage size="md" src={src}></RoundImage>
      </div>
      <div className="flex-grow">
        <CommentNickname time={time}>{nickName}</CommentNickname>
        <div className="flex gap-x-2">
          <div className="my-1 flex flex-grow gap-4">
            <CommentText>{text}</CommentText>{' '}
          </div>{' '}
          <div className="ml-auto">
            <CommentLikeButton active={active}>{like}</CommentLikeButton>
          </div>
        </div>{' '}
        <div className=" flex gap-2">
          {isNotReply ? (
            <button onClick={createReplyFn} className="text-xs">
              답글 달기
            </button>
          ) : null}
          {isNotReply &&
          replyIdArray &&
          showReply &&
          shownStateReply?.length == 0 ? (
            <button className=" text-xs" onClick={async () => showReply()}>
              답글 더 보기
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Comment;
