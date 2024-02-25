import { string, bool } from 'prop-types';

function SmallButton({ type, disabled, children, ...rest }) {
  const buttonStyle = {
    className:
      'h-[36px] rounded-xl px-4 text-b-2-medium text-bjblack bg-bjyellow-400 disabled:bg-bjgray-300 disabled:text-bjgray-500 focus:outline-none focus-visible:ring focus-visible:ring-bjblack/10',
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

export default SmallButton;

SmallButton.propTypes = {
  type: string,
  disabled: bool,
  children: string,
};
