import Svg from '@/components/Atoms/Svg/Svg';

const DownButton = ({
  onClick,
  className,
}: {
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className: string;
}) => {
  return (
    <button
      className={`${className} flex h-10 w-10 items-center justify-center rounded-full bg-white`}
      onClick={onClick}
      sr-only={'아래로 이동하기'}
    >
      <Svg id="arrow-down" />
    </button>
  );
};

export default DownButton;
