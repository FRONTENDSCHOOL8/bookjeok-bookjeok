import { oneOfType, string, elementType, bool } from 'prop-types';
import { Link } from 'react-router-dom';

function OutlineButton({
  as: ComponentName = Link,
  className,
  clicked,
  ...rest
}) {
  const buttonStyle = {
    className: `flex justify-center items-center w-full h-[64px] rounded-5xl text-b-1-medium  border-2 focus:outline-none focus-visible:ring focus-visible:ring-bjblack/30`,
  };

  return (
    <ComponentName
      className={`${buttonStyle.className} ${clicked ? 'border-bjblack text-bjblack' : 'border-bjgray-500 text-bjgray-500'} ${className}`}
      {...rest}
    />
  );
}

export default OutlineButton;

OutlineButton.propTypes = {
  as: oneOfType([string, elementType]),
  className: string,
  clicked: bool,
};
