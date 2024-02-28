import { oneOfType, string, elementType } from 'prop-types';
import { Link } from 'react-router-dom';

function MainButton({
  as: ComponentName = Link,
  color = 'primary',
  children,
  className,
  ...rest
}) {
  const buttonStyle = {
    primary:
      'bg-bjyellow-400 focus:outline-none focus-visible:ring focus-visible:ring-bjblack/10 flex justify-center items-center w-full h-[64px] rounded-5xl text-b-1-medium text-bjblack disabled:bg-bjgray-300 disabled:text-bjgray-500',
    secondary:
      'bg-bjgray-100 focus:outline-none focus-visible:ring focus-visible:ring-bjblack/10 flex justify-center items-center w-full h-[64px] rounded-5xl text-b-1-medium text-bjblack disabled:bg-bjgray-300 disabled:text-bjgray-500',
  };

  return (
    <ComponentName className={`${buttonStyle[color]} ${className}`} {...rest}>
      {children}
    </ComponentName>
  );
}

export default MainButton;

MainButton.propTypes = {
  as: oneOfType([string, elementType]),
  color: string,
  children: string,
  className: string,
};
