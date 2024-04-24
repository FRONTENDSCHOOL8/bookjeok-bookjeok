import { Link } from 'react-router-dom';

interface TsmallButton {
  as: any;
  className?: string;
  to?: string;
}

function SmallButton({
  as: ComponentName = Link,
  className,
  to,
  ...rest
}: TsmallButton) {
  const buttonStyle = {
    className:
      'flex justify-center items-center h-[36px] rounded-xl px-4 text-b-2-medium text-bjblack bg-bjyellow-400 disabled:bg-bjgray-300 disabled:text-bjgray-500',
  };

  return (
    <ComponentName
      className={`${buttonStyle.className}  ${className}`}
      to={to}
      {...rest}
    />
  );
}

export default SmallButton;
