import { Svg } from '@/components/Atoms';

interface TAccordion {
  applicant?: string | number;
  confirmUser?: number;
  limitPerson?: number;
  className?: string;
  open?: boolean;
  children?: React.ReactNode;
  mainText?: string[] | string;
  smallText?: string;
  src?: string;
  nickname?: string;
  text?: string;
}
function Accordion({
  applicant,
  confirmUser,
  limitPerson,
  className,
  open = false,
  mainText,
  smallText,
  children,
}: TAccordion) {
  const accordionStyle = {
    className: 'group/item',
  };

  return (
    <details className={`${accordionStyle.className} ${className}`} open={open}>
      <summary className="flex h-[64px] flex-row items-center">
        <span className="flex flex-1 flex-col">
          {applicant ? (
            <span className="text-h-2-semibold text-bjblack">
              참여 대기 멤버 <span className="text-bjred-400">{applicant}</span>
              명
            </span>
          ) : (
            ''
          )}
          {confirmUser ? (
            <span className="text-h-2-semibold text-bjblack">
              참여 확정 멤버 {limitPerson}명 중{' '}
              <span className="text-bjgray-500">{confirmUser}</span>명
            </span>
          ) : (
            ''
          )}
          {mainText ? (
            <span className="text-h-2-semibold text-bjblack">{mainText}</span>
          ) : (
            ''
          )}
          <span className="text-b-2-regular text-bjgray-500">{smallText}</span>
        </span>
        <span className="block group-open/item:hidden">
          <Svg id="chevron-down" />
        </span>
        <span className="hidden group-open/item:block">
          <Svg id="chevron-right" />
        </span>
      </summary>
      {children}
    </details>
  );
}

export default Accordion;
