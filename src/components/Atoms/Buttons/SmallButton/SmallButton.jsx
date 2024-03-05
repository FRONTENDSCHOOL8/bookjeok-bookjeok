import { oneOfType, string, elementType } from 'prop-types';
import { Link } from 'react-router-dom';

function SmallButton({ as: ComponentName = Link, className, ...rest }) {
  const buttonStyle = {
    className:
      'flex justify-center items-center h-[36px] rounded-xl px-4 text-b-2-medium text-bjblack bg-bjyellow-400 disabled:bg-bjgray-300 disabled:text-bjgray-500 focus:outline-none focus-visible:ring focus-visible:ring-bjblack/30',
  };

  return (
    <ComponentName
      className={`${buttonStyle.className} ${className}`}
      {...rest}
    />
  );
}

export default SmallButton;
SmallButton.propTypes = {
  as: oneOfType([string, elementType]),
  className: string,
};
