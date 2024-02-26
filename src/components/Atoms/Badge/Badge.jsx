import { string } from 'prop-types';

function Badge({ children }) {
  const badgeStyle = {
    className:
      'min-w-20 h-[24px] inline-block text-center rounded-xl px-2 py-0.5 text-b-2-medium text-bjblack bg-bjyellow-400',
  };

  return (
    <>
      <span className={badgeStyle.className}>{children}</span>
    </>
  );
}

export default Badge;

Badge.propTypes = {
  children: string,
};
