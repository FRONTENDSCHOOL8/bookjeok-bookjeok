import { Svg } from '@/components/Atoms';

interface TextFormType {
  className?: string;
  svgId?: string;
  hiddenLabel?: boolean;
  children?: React.ReactNode;
  type?: string;
  id?: string;
  name?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  description?: string;
  error?: boolean;
}

function TextForm({
  className,
  type,
  id,
  name,
  value,
  defaultValue,
  placeholder,
  disabled,
  required,
  maxLength,
  description,
  error = false,
  children,
  svgId,
  hiddenLabel = false,
  ...rest
}: TextFormType) {
  const textFormStyle = {
    className: 'flex flex-col',
    input:
      'bg-transparent text-b-1-regular text-bjblack placeholder:text-b-1-regular placeholder:text-bjgray-500 read-only:text-bjblack read-only:pointer-events-none focus:outline-none disabled:text-bjgray-500',
  };

  let labelElement = (
    <label htmlFor={id}>
      <span className="text-b-2-regular text-bjgray-500">{children}</span>
    </label>
  );

  if (hiddenLabel) {
    labelElement = (
      <label htmlFor={id} className="sr-only">
        <span className="text-b-2-regular text-bjgray-500">{children}</span>
      </label>
    );
  }

  return (
    <div className={`${textFormStyle.className} ${className}`}>
      <div
        className={`flex h-[64px] flex-row items-center gap-4 rounded-5xl border-[1px] border-bjgray-100 bg-bjgray-100 px-4 focus-within:border-bjgray-500 has-[:disabled]:bg-bjgray-200 ${error ? 'border-bjred-400 focus-within:!border-bjred-400' : ''}`}
      >
        {svgId && (
          <div>
            <Svg id={svgId} />
          </div>
        )}
        <div className="flex flex-grow flex-col">
          {labelElement}
          <input
            type={type}
            id={id}
            name={name}
            value={value}
            defaultValue={defaultValue}
            placeholder={placeholder}
            disabled={disabled}
            required={required}
            maxLength={maxLength}
            className={textFormStyle.input}
            {...rest}
          />
        </div>
      </div>
      {description && (
        <p
          className={`mt-2 px-4 text-b-2-regular text-bjgray-500 ${error ? 'text-bjred-400' : ''}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default TextForm;
