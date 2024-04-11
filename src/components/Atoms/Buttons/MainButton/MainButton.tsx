import { Link } from 'react-router-dom';
import { Svg } from '@/components/Atoms';

type ButtonStyle = { primary: string; secondary: string };

interface MainButtonProps {
  to?: string;
  type?: 'submit' | 'button' | 'reset';
  color?: 'primary' | 'secondary';
  className?: string;
  size?: 'lg' | 'sm';
  svgId?: string;
  onClick?: () => void;
  as?: string;
  children: React.ReactNode;
}

const MainButton = ({
  to,
  type,
  color = 'primary',
  className,
  size = 'lg',
  svgId,
  children,
  ...rest
}: MainButtonProps) => {
  const buttonStyle: ButtonStyle = {
    primary:
      'bg-bjyellow-400 flex justify-center items-center w-full rounded-5xl text-b-1-medium text-bjblack disabled:bg-bjgray-300 disabled:text-bjgray-500',
    secondary:
      'bg-bjgray-100 flex justify-center items-center w-full rounded-5xl text-b-1-medium text-bjblack disabled:bg-bjgray-300 disabled:text-bjgray-500',
  };
  const buttonSize = {
    lg: 'h-16',
    sm: 'h-9',
  };

  if (to) {
    return (
      <Link
        className={`${buttonStyle[color]} ${className} ${buttonSize[size]}`}
        to={to}
        {...rest}
      >
        {children}
        {svgId && <Svg id={svgId} size={18} className="ml-1" />}
      </Link>
    );
  } else {
    return (
      <button
        className={`${buttonStyle[color]} ${className} ${buttonSize[size]}`}
        type={type}
        {...rest}
      >
        {children}
        {svgId && <Svg id={svgId} size={18} className="ml-1" />}
      </button>
    );
  }
};

export default MainButton;
