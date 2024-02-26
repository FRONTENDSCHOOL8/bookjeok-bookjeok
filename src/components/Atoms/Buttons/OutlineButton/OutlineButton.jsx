import { string, bool } from 'prop-types';

function OutlineButton({ type, disabled, children, ...rest }) {
  const buttonStyle = {
    className:
      'w-full h-[64px] rounded-5xl text-b-1-medium text-bjblack border-2 border-bjblack disabled:text-bjgray-500 disabled:border-bjgray-500 focus:outline-none focus-visible:ring focus-visible:ring-bjblack/10',
  };

  return (
    <button
      className={buttonStyle.className}
      type={type}
      disabled={disabled}
      {...rest}
    >
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
