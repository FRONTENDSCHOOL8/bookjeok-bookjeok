import { bool, number, string, element, oneOfType, object } from 'prop-types';
import { Svg } from '@/components/Atoms';

function ChatTextarea({
  className,
  forwardRef = null,
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
  rows = '1',
  ...rest
}) {
  const textareaStyle = {
    className:
      'flex min-h-[40px] flex-row gap-4 rounded-5xl border-[1px] border-bjgray-100 bg-bjgray-100 px-4 py-2 focus-within:border-bjgray-500 has-[:disabled]:bg-bjgray-200',
    textarea:
      'resize-none whitespace-pre-wrap bg-bjgray-100 text-b-1-regular text-bjblack placeholder:text-b-1-regular placeholder:text-bjgray-500 focus:outline-none disabled:text-bjgray-500',
  };

  return (
    <div className={`${textareaStyle.className} ${className}`}>
      <div className="flex flex-grow flex-col">
        <label htmlFor={id} className="sr-only">
          {label}
        </label>
        <textarea
          ref={forwardRef}
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
          {...rest}
        />
      </div>
      <button type="submit" title="보내기" aria-label="보내기">
        <Svg id="send" />
      </button>
    </div>
  );
}

export default ChatTextarea;

ChatTextarea.propTypes = {
  className: string,
  forwardRef: oneOfType([element, object]),
  label: string,
  id: string,
  name: string,
  value: string,
  defaultValue: string,
  placeholder: string,
  disabled: bool,
  readOnly: bool,
  required: bool,
  minLength: number,
  maxLength: number,
  rows: number,
};
