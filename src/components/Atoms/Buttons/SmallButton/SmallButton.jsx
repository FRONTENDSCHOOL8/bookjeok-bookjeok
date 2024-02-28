import { oneOfType, string, elementType } from 'prop-types';

function SmallButton({ as: ComponentName = 'Link', ...rest }) {
  const buttonStyle = {
    className:
      'flex justify-center items-center h-[36px] rounded-xl px-4 text-b-2-medium text-bjblack bg-bjyellow-400 disabled:bg-bjgray-300 disabled:text-bjgray-500 focus:outline-none focus-visible:ring focus-visible:ring-bjblack/10',
  };

  return <ComponentName className={buttonStyle.className} {...rest} />;
}

export default SmallButton;
SmallButton.propTypes = {
  as: oneOfType([string, elementType]),
};
