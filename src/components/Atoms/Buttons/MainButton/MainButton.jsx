import { string, bool } from 'prop-types';

function MainButton({ type, disabled, children }) {
  const buttonStyle = {
    className:
      'w-[344px] h-[64px] rounded-5xl bg-bjyellow-400 text-base font-medium disabled:bg-bjgray-300 disabled:text-bjgray-500',
  };

  return (
    <button className={buttonStyle.className} type={type} disabled={disabled}>
      {children}
    </button>
  );
}

export default MainButton;

MainButton.propTypes = {
  type: string,
  disabled: bool,
  children: string,
};
