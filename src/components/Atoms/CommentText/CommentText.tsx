type TCommentText = {
  className?: string;
  children: React.ReactNode;
};

const CommentText = ({ className, children }: TCommentText) => {
  return (
    <div className={`text-b-2-medium text-bjblack ${className}`}>
      <span>{children}</span>
    </div>
  );
};

export default CommentText;
