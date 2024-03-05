import { bool, string } from 'prop-types';
import { Svg } from '@/components/Atoms';

function NomalTitle({
  className,
  backLink = false,
  children,
  subText,
  resetButton = false,
}) {
  const nomalTitleStyle = {
    className:
      'h-[56px] flex flex-row justify-center items-center shrink-0 bg-white',
  };

  let backLinkElement = null;

  if (backLink) {
    backLinkElement = (
      <a
        onClick={() => window.history.back()}
        title="뒤로 가기"
        aria-label="뒤로 가기"
        className="cursor-pointer p-4"
        tabIndex={1}
      >
        <Svg id="arrow-left" />
      </a>
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
    <div className={`${nomalTitleStyle.className} ${className}`}>
      <div className="flex flex-1 items-center justify-start">
        {backLinkElement}
      </div>
      <div className="flex flex-1 flex-grow flex-col items-center justify-center whitespace-nowrap">
        <h1 className="text-b-1-medium text-bjblack">{children}</h1>
        <span className="text-b-3-medium text-bjgray-500">{subText}</span>
      </div>
      <div className="flex flex-1 items-center justify-end">
        {resetButtonElement}
      </div>
    </div>
  );
}

export default NomalTitle;

NomalTitle.propTypes = {
  className: string,
  backLink: bool,
  children: string,
  subText: string,
  resetButton: bool,
};
