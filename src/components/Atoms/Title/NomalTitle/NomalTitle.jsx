import { bool, string } from 'prop-types';
import { Link } from 'react-router-dom';
import { Svg } from '@/components/Atoms';

function NomalTitle({
  className,
  backLink = false,
  children,
  subText,
  resetButton = false,
  path,
}) {
  const nomalTitleStyle = {
    className:
      'h-[56px] px-4 flex flex-row justify-center items-center shrink-0',
  };

  let backLinkElement = null;

  if (backLink) {
    backLinkElement = (
      <Link to={path} title="뒤로 가기" aria-label="뒤로 가기">
        <Svg id="arrow-left" />
      </Link>
    );
  }

  let resetButtonElement = null;

  if (resetButton) {
    resetButtonElement = (
      <button type="reset" className="text-b-1-medium text-bjblack">
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
        <span className="text-b-1-medium text-bjblack">{children}</span>
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
  path: string,
};
