import { string, bool } from 'prop-types';

function SmallButton({ type, disabled, children }) {
  const buttonStyle = {
    className:
      'h-[36px] rounded-xl px-4 text-b-2-medium text-bjblack bg-bjyellow-400 hover:bg-bjyellow-500 active:bg-bjyellow-500 focus:bg-bjyellow-500 focus:outline-none disabled:bg-bjgray-300 disabled:text-bjgray-500',
  };

  return (
    <button className={buttonStyle.className} type={type} disabled={disabled}>
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
