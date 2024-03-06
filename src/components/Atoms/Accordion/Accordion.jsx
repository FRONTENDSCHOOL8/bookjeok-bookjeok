import { bool, string, array, number, oneOfType } from 'prop-types';
import { Svg } from '@/components/Atoms';

function Accordion({
  applicant,
  confirmUser,
  limitPerson,
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
          {applicant ? (
            <p className="text-h-2-semibold text-bjblack">
              참여 대기 멤버 <span className="text-bjred-400">{applicant}</span>
              명
            </p>
          ) : (
            ''
          )}
          {confirmUser ? (
            <p className="text-h-2-semibold text-bjblack">
              참여 확정 멤버 {limitPerson}명 중{' '}
              <span className="text-bjgray-500">{confirmUser}</span>명
            </p>
          ) : (
            ''
          )}
          {mainText ? (
            <p className="text-h-2-semibold text-bjblack">{mainText}</p>
          ) : (
            ''
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
  applicant: oneOfType([number, string]),
  confirmUser: number,
  limitPerson: number,
  className: string,
  open: bool,
  children: oneOfType([array, string]),
  mainText: oneOfType([array, string]),
  smallText: string,
  src: string,
  nickname: string,
  text: string,
};
