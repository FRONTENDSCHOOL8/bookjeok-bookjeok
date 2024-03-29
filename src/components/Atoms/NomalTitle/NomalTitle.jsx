import { Svg } from '@/components/Atoms';
import { bool, string } from 'prop-types';
import { useNavigate } from 'react-router-dom';

function NomalTitle({
  className,
  backLink = false,
  path,
  children,
  subText,
  resetButton = false,
}) {
  const nomalTitleStyle = {
    className:
      'z-10 flex h-[56px] items-center justify-between bg-white shadow-md',
  };
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  const goPath = (path) => () => {
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
        <span className="whitespace-nowrap">{resetButtonElement}</span>
      </div>
    </header>
  );
}

export default NomalTitle;

NomalTitle.propTypes = {
  path: string,
  className: string,
  backLink: bool,
  children: string,
  subText: string,
  resetButton: bool,
};
