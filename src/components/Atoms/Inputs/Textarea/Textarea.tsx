import { TextareaHTMLAttributes } from 'react';

interface TTextarea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  length: number;
  // onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
const Textarea = ({
  className,
  label,
  id,
  name,
  value,
  defaultValue,
  placeholder,
  disabled,
  readOnly,
  required,
  minLength,
  maxLength,
  rows = 5,
  length = 0,
  onChange,
}: TTextarea) => {
  const textareaStyle = {
    textarea:
      'resize-none w-full p-4 rounded-5xl bg-bjgray-100 border-[1px] border-bjgray-100 focus:border-bjgray-400 focus:outline-none text-b-1-regular text-bjblack  placeholder:text-b-1-regular placeholder:text-bjgray-500 disabled:bg-bjgray-200 disabled:text-bjgray-500',
  };

  return (
    <div className={className}>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        rows={rows}
        className={textareaStyle.textarea}
        onChange={onChange}
      />
      <p className="m-0 text-right text-b-2-regular text-bjgray-500">
        <span className="text-bjblack">{length}</span>/{maxLength}
      </p>
    </div>
  );
};

export default Textarea;
