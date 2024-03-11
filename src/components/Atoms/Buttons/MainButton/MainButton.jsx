import { oneOfType, string, elementType, bool } from 'prop-types';
import { Link } from 'react-router-dom';
import Svg from '../../Svg/Svg';

function MainButton({
  as: ComponentName = Link,
  color = 'primary',
  children,
  className,
  size = 'lg',
  svgId = false,
  ...rest
}) {
  const buttonStyle = {
    primary:
      'bg-bjyellow-400 focus:outline-none focus-visible:ring focus-visible:ring-bjblack/30 flex justify-center items-center w-full rounded-5xl text-b-1-medium text-bjblack disabled:bg-bjgray-300 disabled:text-bjgray-500',
    secondary:
      'bg-bjgray-100 focus:outline-none focus-visible:ring focus-visible:ring-bjblack/30 flex justify-center items-center w-full rounded-5xl text-b-1-medium text-bjblack disabled:bg-bjgray-300 disabled:text-bjgray-500',
  };
  const buttonSize = {
    lg: 'h-16',
    sm: 'h-9',
  };

  return (
    <ComponentName
      className={`${buttonStyle[color]} ${className} ${buttonSize[size]}`}
      {...rest}
    >
      {children}
      {svgId && <Svg id={svgId} width={18} height={18} className="ml-1" />}
    </ComponentName>
  );
}

export default MainButton;

MainButton.propTypes = {
  as: oneOfType([string, elementType]),
  color: string,
  size: string,
  children: string,
  className: string,
  svgId: string,
};
