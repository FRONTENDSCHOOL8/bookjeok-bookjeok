import { memo } from 'react';

interface Tbox {
  className?: string;
  children: React.ReactNode;
}

const TextBox = ({ className, children }: Tbox) => {
  return (
    <div
      className={`min-h-5 w-full rounded-5xl bg-bjgray-100 p-4 text-b-1-regular text-bjblack ${className}`}
    >
      {children}
    </div>
  );
};

export default memo(TextBox);
