import { Svg } from '@/components/Atoms';
import { memo } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

interface TNomalTitle {
  className?: string;
  backLink?: boolean;
  path?: string;
  children: React.ReactNode;
  subText?: string;
  resetButton?: boolean;
  iconButton?: boolean;
  burgerButton?: boolean;
  onClickReset?: () => void;
  handleBurger?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => void;
}
const NomalTitle = ({
  className,
  backLink = false,
  path,
  children,
  subText,
  resetButton = false,
  onClickReset,
  iconButton = false,
  burgerButton = false,
  handleBurger,
}: TNomalTitle) => {
  const { bookreviewId } = useParams();
  const nomalTitleStyle = {
    className:
      'z-10 flex h-[56px] items-center justify-between bg-white shadow-md',
  };
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goPath = (path: string) => () => {
    navigate(`/${path}`, { replace: true });
  };
  let backLinkElement = null;

  if (backLink) {
    backLinkElement = (
      <button
        onClick={path ? goPath(path) : goBack}
        title="뒤로 가기"
        aria-label="뒤로 가기"
        className="cursor-pointer p-4"
        tabIndex={1}
      >
        <Svg id="arrow-left" />
      </button>
    );
  }

  let resetButtonElement = null;

  if (resetButton) {
    resetButtonElement = (
      <button
        type="button"
        onClick={onClickReset}
        className="p-4 text-b-1-medium text-bjblack"
      >
        초기화
      </button>
    );
  }

  let iconButtonElement = null;

  if (iconButton) {
    iconButtonElement = (
      <>
        <div className="flex gap-1 p-4 pl-0">
          <Link
            to={`/bookReview/${bookreviewId}/comments`}
            type="button"
            aria-label="댓글 보기"
          >
            <Svg id="chat"></Svg>
          </Link>
        </div>
      </>
    );
  }
  let burgerButtonElement = null;
  if (burgerButton) {
    burgerButtonElement = (
      <button
        type="button"
        onClick={handleBurger}
        className="p-4 text-b-1-medium text-bjblack"
      >
        <Svg id="burger" />
      </button>
    );
  }

  return (
    <header className={`${nomalTitleStyle.className} ${className}`}>
      <div className="basis-[56px]">{backLinkElement}</div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-b-0-medium text-bjblack">
          <span className="line-clamp-1">{children}</span>
        </h1>
        <span className="text-b-3-medium text-bjgray-500">{subText}</span>
      </div>
      <div className="basis-[56px]">
        <span className="whitespace-nowrap">
          {resetButtonElement}
          {iconButtonElement}
          {burgerButtonElement}
        </span>
      </div>
    </header>
  );
};

export default memo(NomalTitle);
