/* eslint-disable no-unused-vars */
import { memo } from 'react';
import { Link } from 'react-router-dom';
import { Svg } from '@/components/Atoms';

type ButtonStyle = { primary: string; secondary: string; custom: string };

interface MainButtonProps {
  to?: string;
  type?: 'submit' | 'button' | 'reset';
  color?: 'primary' | 'secondary' | 'custom';
  className?: string;
  size?: 'lg' | 'sm';
  svgId?: string;
  as?: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  state?: {} | undefined;
}

const MainButton = ({
  to,
  type,
  color = 'primary',
  className,
  size = 'lg',
  svgId,
  children,
  onClick,
  disabled,
  ...rest
}: MainButtonProps) => {
  const buttonStyle: ButtonStyle = {
    primary:
      'bg-bjyellow-400 flex justify-center items-center w-full rounded-5xl text-b-1-medium text-bjblack disabled:bg-bjgray-300 disabled:text-bjgray-500',
    secondary:
      'bg-bjgray-100 flex justify-center items-center w-full rounded-5xl text-b-1-medium text-bjblack disabled:bg-bjgray-300 disabled:text-bjgray-500',
    custom: '',
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
        onClick={onClick}
        disabled={disabled}
        {...rest}
      >
        {children}
        {svgId && <Svg id={svgId} size={18} className="ml-1" />}
      </button>
    );
  }
};

export default memo(MainButton);
