import { Svg } from '@/components/Atoms';

interface LikeButtonProps {
  className?: string;
  active?: boolean;
  id: string;
  onClick: (
    id: string
  ) => (e: React.MouseEvent<HTMLButtonElement>) => Promise<void>;
  // [key: string]: any;
}

const LikeButton = ({
  className,
  active = false,
  onClick,
  id,
  // ...rest
}: LikeButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick(id)}
      data-club-id={id}
      className={`absolute bottom-3 right-3 ${className}`}
      aria-label="좋아요"
      // {...rest}
    >
      {active ? (
        <>
          <Svg
            id="heart-filled"
            color="#fef2a0"
            size={30}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-80 blur"
          />
          <Svg
            id="heart-filled"
            color="#fee440"
            size={30}
            className="relative"
          />
        </>
      ) : (
        <>
          <Svg
            id="heart"
            color="#ffffff"
            size={30}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-40 blur-sm"
          />
          <Svg id="heart" color="#767676" size={30} className="relative" />
        </>
      )}
    </button>
  );
};

export default LikeButton;
