import { string } from 'prop-types';

function TextBox({ className, children }) {
  return (
    <div
      className={`min-h-5 w-full rounded-5xl bg-bjgray-100 p-4 text-b-1-regular text-bjblack ${className}`}
    >
      {children}
    </div>
  );
}

export default TextBox;

TextBox.propTypes = {
  className: string,
  children: string,
};
