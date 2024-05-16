import { Svg } from '@/components/Atoms';
import { memo } from 'react';
import { useNavigate } from 'react-router-dom';

interface TNomalTitle {
  className?: string;
  backLink?: boolean;
  path?: string;
  children: React.ReactNode;
  subText?: string;
  resetButton?: boolean;
  iconButton?: boolean;
}
const NomalTitle = ({
  className,
  backLink = false,
  path,
  children,
  subText,
  resetButton = false,
  iconButton = false,
}: TNomalTitle) => {
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
      <button type="reset" className="p-4 text-b-1-medium text-bjblack">
        초기화
      </button>
    );
  }

  let iconButtonElement = null;

  if (iconButton) {
    iconButtonElement = (
      <>
        <div className="flex gap-1 p-4 pl-0">
          <button type="button" aria-label="댓글 보기">
            <Svg id="chat"></Svg>
          </button>
          <button type="button" aria-label="좋아요">
            <Svg id="heart-filled" color="#EF5350"></Svg>
          </button>
        </div>
      </>
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
        </span>
      </div>
    </header>
  );
};

export default memo(NomalTitle);
