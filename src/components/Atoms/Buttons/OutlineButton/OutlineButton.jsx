import { oneOfType, string, elementType } from 'prop-types';

function OutlineButton({ as: ComponentName = 'Link', ...rest }) {
  const buttonStyle = {
    className:
      'flex justify-center items-center w-full h-[64px] rounded-5xl text-b-1-medium text-bjblack border-2 border-bjblack disabled:text-bjgray-500 disabled:border-bjgray-500 focus:outline-none focus-visible:ring focus-visible:ring-bjblack/10',
  };

  return <ComponentName className={buttonStyle.className} {...rest} />;
}

export default OutlineButton;

OutlineButton.propTypes = {
  as: oneOfType([string, elementType]),
};
