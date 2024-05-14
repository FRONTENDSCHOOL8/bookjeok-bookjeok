import { Svg } from '@/components/Atoms';

interface CommentLikeButtonProps {
  className?: string;
  active?: boolean;
  id?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
  children?: React.ReactNode;
}

const CommentLikeButton = ({
  className,
  active,
  onClick,
  children,
}: CommentLikeButtonProps) => {
  return (
    <div className={`inline-block text-center ${className}`}>
      <button
        type="button"
        onClick={onClick}
        className={`inline-block text-center align-text-top`}
        aria-label="좋아요"
      >
        {active ? (
          <Svg id="heart-filled" color="#EF5350" />
        ) : (
          <Svg id="heart" />
        )}
      </button>
      <span className="block text-b-3-light text-bjgray-500">{children}</span>
    </div>
  );
};

export default CommentLikeButton;
