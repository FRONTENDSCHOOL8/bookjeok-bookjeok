import {
  CommentLikeButton,
  CommentNickname,
  CommentText,
  RoundImage,
} from '@/components/Atoms';

interface CommentType {
  className?: string;
  src: string;
  nickName?: string;
  time?: string;
  text?: string;
  active?: boolean;
  like?: number;
  isNotReply?: boolean;
  createReplyFn?: () => void;
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
}: CommentType) {
  return (
    <div className={`my-4 flex gap-x-4 ${className}`}>
      <div>
        <RoundImage size="md" src={src}></RoundImage>
      </div>
      <div className="flex-grow">
        <div>
          <CommentNickname time={time}>{nickName}</CommentNickname>
        </div>
        <div className="flex gap-x-2">
          <div className="my-1 flex flex-grow gap-4">
            <CommentText>{text}</CommentText>{' '}
            {isNotReply ? (
              <button onClick={createReplyFn} className="text-xs">
                답글 달기
              </button>
            ) : null}
          </div>
          <div className="ml-auto">
            <CommentLikeButton active={active}>{like}</CommentLikeButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comment;
