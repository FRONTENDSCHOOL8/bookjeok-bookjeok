import { Svg } from '@/components/Atoms';

interface TChatTexarea {
  forwardRef: React.Ref<HTMLTextAreaElement>;
  label: string;
  id: string;
  name: string;
  placeholder: string;
  value?: string;
  required?: boolean;
  rows?: number;
  className?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function ChatTextarea({
  label,
  forwardRef = null,
  id,
  name,
  placeholder,
  value,
  required = true,
  rows = 1,
  className,
  onClick,
}: TChatTexarea) {
  const textareaStyle = {
    className:
      'flex min-h-[40px] flex-row gap-4 rounded-5xl border-[1px] border-bjgray-100 bg-bjgray-100 px-4 py-2 focus-within:border-bjgray-500 has-[:disabled]:bg-bjgray-200',
    textarea:
      'resize-none h-auto overflow-y-hidden whitespace-pre-wrap bg-bjgray-100 text-b-1-regular text-bjblack placeholder:text-b-1-regular placeholder:text-bjgray-500 focus:outline-none disabled:text-bjgray-500',
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
          placeholder={placeholder}
          value={value}
          required={required}
          rows={rows}
          className={textareaStyle.textarea}
          // defaultValue={defaultValue}
          // disabled={disabled}
          // readOnly={readOnly}
          // minLength={minLength}
          // maxLength={maxLength}
          // {...rest}
        />
      </div>
      <button
        type="button"
        onClick={onClick}
        title="보내기"
        aria-label="보내기"
      >
        <Svg id="send" />
      </button>
    </div>
  );
}

export default ChatTextarea;
