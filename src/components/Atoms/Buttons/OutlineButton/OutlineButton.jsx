import { string, bool } from 'prop-types';

function OutlineButton({ type, disabled, children }) {
  const buttonStyle = {
    className:
      'w-full h-[64px] rounded-5xl text-b-1-medium text-bjblack border-2 border-bjblack hover:border-opacity-70 active:border-opacity-70 focus:border-opacity-70 focus:outline-none disabled:text-bjgray-500 disabled:border-bjgray-500',
  };

  return (
    <button className={buttonStyle.className} type={type} disabled={disabled}>
      {children}
    </button>
  );
}

export default OutlineButton;

OutlineButton.propTypes = {
  type: string,
  disabled: bool,
  children: string,
};
