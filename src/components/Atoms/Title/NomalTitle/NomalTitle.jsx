import { string, bool } from 'prop-types';
import Svg from '../../Svg/Svg';

function NomalTitle({
  backButton = false,
  children,
  subText,
  textButton = false,
}) {
  const nomalTitleStyle = {
    className: 'h-[56px] px-4 flex flex-row justify-center items-center',
  };

  let backButtonElement = null;

  if (backButton) {
    backButtonElement = (
      <button type="button" title="뒤로 가기" aria-label="뒤로 가기">
        <Svg id="arrow-left" />
      </button>
    );
  }

  let textButtonElement = null;

  if (textButton) {
    textButtonElement = (
      <button type="button" className="text-b-1-medium text-bjblack">
        초기화
      </button>
    );
  }

  return (
    <div className={nomalTitleStyle.className}>
      <div className="flex-1 flex items-center justify-start">
        {backButtonElement}
      </div>
      <div className="flex-1 flex-grow flex flex-col justify-center items-center whitespace-nowrap">
        <span className="text-b-1-medium text-bjblack">{children}</span>
        <span className="text-b-3-medium text-bjgray-500">{subText}</span>
      </div>
      <div className="flex-1 flex items-center justify-end">
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
};
