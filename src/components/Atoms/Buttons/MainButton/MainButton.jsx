import { string, bool } from 'prop-types';

function MainButton({ className, type, disabled, children }) {
  const buttonStyle = {
    large_primary:
      'bg-bjyellow-400 hover:bg-bjyellow-500 active:bg-bjyellow-500 focus:bg-bjyellow-500 focus:outline-none',
    large_secondary:
      'bg-bjgray-100 hover:bg-bjgray-200 active:bg-bjgray-200 focus:bg-bjgray-200 focus:outline-none',
  };

  return (
    <>
      <button
        className={`${buttonStyle[className]} w-full h-[64px] rounded-5xl text-b-1-medium text-bjblack disabled:bg-bjgray-300 disabled:text-bjgray-500`}
        type={type}
        disabled={disabled}
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
