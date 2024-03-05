import { bool, string, element, any } from 'prop-types';
import { Svg } from '@/components/Atoms';

function Accordion({
  management,
  className,
  open = false,
  mainText,
  smallText,
  children,
}) {
  const accordionStyle = {
    className: 'group/item',
  };

  return (
    <details className={`${accordionStyle.className} ${className}`} open={open}>
      <summary className="flex h-[64px] flex-row items-center">
        <div className="flex flex-1 flex-col">
          {management ? (
            <p className="text-h-2-semibold text-bjblack">
              참여 대기 멤버 <span className="text-bjred-400">{mainText}</span>
              명
            </p>
          ) : (
            <p className="text-h-2-semibold text-bjblack">{mainText}</p>
          )}
          <p className="text-b-2-regular text-bjgray-500">{smallText}</p>
        </div>
        <div className="block group-open/item:hidden">
          <Svg id="chevron-down" />
        </div>
        <div className="hidden group-open/item:block">
          <Svg id="chevron-right" />
        </div>
      </summary>
      {children}
    </details>
  );
}

export default Accordion;

Accordion.propTypes = {
  management: bool,
  className: string,
  open: bool,
  children: element,
  mainText: any,
  smallText: string,
  src: string,
  nickname: string,
  text: string,
};
