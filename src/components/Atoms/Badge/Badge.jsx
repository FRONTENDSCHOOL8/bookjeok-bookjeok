import { string } from 'prop-types';

function Badge({ className, children }) {
  return (
    <span
      className={`flex h-[24px] w-auto items-center text-nowrap rounded-xl bg-bjyellow-400 bg-opacity-85 px-2 py-0.5 text-center text-xs  font-semibold text-bjblack ${className}`}
    >
      {children}
    </span>
  );
}

export default Badge;

Badge.propTypes = {
  className: string,
  children: string,
};
