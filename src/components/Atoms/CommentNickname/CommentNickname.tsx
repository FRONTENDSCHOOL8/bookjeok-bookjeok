type TCommentNickname = {
  className?: string;
  children: React.ReactNode;
  time?: string;
};

const CommentNickname = ({ className, children, time }: TCommentNickname) => {
  return (
    <div className={`text-b-3-regular text-bjblack ${className}`}>
      <span>{children}</span>
      <time className={`ml-1 text-bjgray-500`}>{time}</time>
    </div>
  );
};

export default CommentNickname;
