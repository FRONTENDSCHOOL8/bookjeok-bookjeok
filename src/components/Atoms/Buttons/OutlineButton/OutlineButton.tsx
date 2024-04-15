import { Link } from 'react-router-dom';
interface TOutlineButton {
  className?: string;
  clicked?: boolean;
  to?: string;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}
const OutlineButton = ({
  className,
  clicked,
  to,
  children,
  type,
  onClick,
  ...rest
}: TOutlineButton) => {
  const buttonStyle = {
    className: `flex justify-center items-center w-full h-[64px] rounded-5xl text-b-1-medium  border-2`,
  };
  if (to) {
    return (
      <Link
        to={to}
        className={`${buttonStyle.className} ${clicked ? 'border-bjblack text-bjblack' : 'border-bjgray-500 text-bjgray-500'} ${className}`}
        {...rest}
      >
        {children}
      </Link>
    );
  } else {
    return (
      <button
        type={type}
        className={`${buttonStyle.className} ${clicked ? 'border-bjblack text-bjblack' : 'border-bjgray-500 text-bjgray-500'} ${className}`}
        {...rest}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
};

export default OutlineButton;
