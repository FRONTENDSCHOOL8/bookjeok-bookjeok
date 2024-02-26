import { string, bool } from 'prop-types';

function MainButton({ color = 'primary', type, disabled, children, ...rest }) {
  const buttonStyle = {
    primary:
      'bg-bjyellow-400 focus:outline-none focus-visible:ring focus-visible:ring-bjblack/10',
    secondary:
      'bg-bjgray-100 focus:outline-none focus-visible:ring focus-visible:ring-bjblack/10',
  };

  return (
    <button
      className={`${buttonStyle[color]} w-full h-[64px] rounded-5xl text-b-1-medium text-bjblack disabled:bg-bjgray-300 disabled:text-bjgray-500`}
      type={type}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}

export default MainButton;

MainButton.propTypes = {
  color: string,
  type: string,
  disabled: bool,
  children: string,
};
