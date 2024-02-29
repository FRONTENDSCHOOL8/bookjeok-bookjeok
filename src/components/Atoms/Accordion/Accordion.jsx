import { bool, string } from 'prop-types';
import SmallButton from '../Buttons/SmallButton/SmallButton';
import TextForm from '../Inputs/TextForm/TextForm';
import RoundImage from '../RoundImage/RoundImage';
import Svg from '../Svg/Svg';

function Accordion({
  className,
  open = false,
  children,
  smallText,
  src,
  nickname,
  text,
}) {
  const accordionStyle = {
    className: 'group/item',
  };

  return (
    <details className={`${accordionStyle.className} ${className}`} open={open}>
      <summary className="flex h-[64px] flex-row items-center">
        <div className="flex flex-1 flex-col">
          <p className="text-h-2-semibold text-bjblack">{children}</p>
          <p className="text-b-2-regular text-bjgray-500">{smallText}</p>
        </div>
        <div className="block group-open/item:hidden">
          <Svg id="chevron-down" />
        </div>
        <div className="hidden group-open/item:block">
          <Svg id="chevron-up" />
        </div>
      </summary>
      <div>
        <dl className="flex flex-col gap-2">
          <dt className="flex h-[64px] flex-row items-center">
            <div className="flex flex-grow flex-row items-center gap-4">
              <RoundImage src={src} alt="alt" size="md"></RoundImage>
              <p>{nickname}</p>
            </div>
            <div>
              <SmallButton as="button" type="button">
                수락
              </SmallButton>
            </div>
          </dt>
          <dd className="py-2">
            <TextForm type="text" hiddenLabel value={text} readOnly></TextForm>
          </dd>
        </dl>
      </div>
    </details>
  );
}

export default Accordion;

Accordion.propTypes = {
  className: string,
  open: bool,
  children: string,
  smallText: string,
  src: string,
  nickname: string,
  text: string,
};
