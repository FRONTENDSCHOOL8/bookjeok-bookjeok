import { Link } from 'react-router-dom';

interface TsmallButton {
  children: React.ReactNode;
  className?: string;
  to?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function SmallButton({ to, className, type, onClick, children }: TsmallButton) {
  const buttonStyle = {
    className:
      'flex justify-center items-center h-[36px] rounded-xl px-4 text-b-2-medium text-bjblack bg-bjyellow-400 disabled:bg-bjgray-300 disabled:text-bjgray-500',
  };

  if (to) {
    return (
      <Link className={`${buttonStyle.className}  ${className}`} to={to}>
        {children}
      </Link>
    );
  } else {
    return (
      <button
        className={`${buttonStyle.className}  ${className}`}
        type={type}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
}

export default SmallButton;
