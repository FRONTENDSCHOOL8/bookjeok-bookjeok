import { string, bool } from 'prop-types';

function MainButton({ className, type, disabled, children, ...rest }) {
  const buttonStyle = {
    large_primary:
      'bg-bjyellow-400 focus:outline-none focus-visible:ring focus-visible:ring-bjblack/10',
    large_secondary:
      'bg-bjgray-100 focus:outline-none focus-visible:ring focus-visible:ring-bjblack/10',
  };

  return (
    <>
      <button
        className={`${buttonStyle[className]} w-full h-[64px] rounded-5xl text-b-1-medium text-bjblack disabled:bg-bjgray-300 disabled:text-bjgray-500`}
        type={type}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    </>
  );
}

export default MainButton;

MainButton.propTypes = {
  className: string,
  type: string,
  disabled: bool,
  children: string,
};
