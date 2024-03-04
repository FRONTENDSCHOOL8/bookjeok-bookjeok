import { string } from 'prop-types';

function Badge({ className, children }) {
  const badgeStyle = {
    className:
      'h-[24px] inline-block text-center rounded-xl px-2 opacity-90 py-0.5 text-b-2-medium text-bjblack bg-bjyellow-400',
  };

  return (
    <span className={`${badgeStyle.className} ${className}`}>{children}</span>
  );
}

export default Badge;

Badge.propTypes = {
  className: string,
  children: string,
};
