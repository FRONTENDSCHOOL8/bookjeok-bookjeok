import { bool, string } from 'prop-types';
import { Link } from 'react-router-dom';
import { Svg } from '@/components/Atoms';

function NomalTitle({
  backButton = false,
  children,
  subText,
  textButton = false,
  path,
}) {
  const nomalTitleStyle = {
    className: 'h-[56px] px-4 flex flex-row justify-center items-center',
  };

  let backButtonElement = null;

  if (backButton) {
    backButtonElement = (
      <Link to={path} title="뒤로 가기" aria-label="뒤로 가기">
        <Svg id="arrow-left" />
      </Link>
    );
  }

  let textButtonElement = null;

  if (textButton) {
    textButtonElement = (
      <button
        type="reset"
        tabIndex="1"
        className="text-b-1-medium text-bjblack"
      >
        초기화
      </button>
    );
  }

  return (
    <div className={nomalTitleStyle.className}>
      <div className="flex flex-1 items-center justify-start">
        {backButtonElement}
      </div>
      <div className="flex flex-1 flex-grow flex-col items-center justify-center whitespace-nowrap">
        <span className="text-b-1-medium text-bjblack">{children}</span>
        <span className="text-b-3-medium text-bjgray-500">{subText}</span>
      </div>
      <div className="flex flex-1 items-center justify-end">
        {textButtonElement}
      </div>
    </div>
  );
}

export default NomalTitle;

NomalTitle.propTypes = {
  backButton: bool,
  children: string,
  subText: string,
  textButton: bool,
  path: string,
};
