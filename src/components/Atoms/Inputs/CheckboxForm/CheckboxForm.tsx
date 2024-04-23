interface CheckboxType {
  className?: string;
  id: string;
  name?: string;
  value?: string;
  checked?: boolean;
  children?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CheckboxForm({
  className,
  id,
  name,
  value,
  checked,
  children,
  onChange,
  ...rest
}: CheckboxType) {
  const checkboxFormStyle = {
    className: 'flex flex-row flex-nowrap justify-between items-center gap-4',
    classNameLabelText: 'text-b-2-regular text-bjblack flex-grow',
    classNameInput:
      'flex-shrink-0 appearance-none w-[24px] h-[24px] rounded-full bg-bjgray-300 checked:bg-bjyellow-400 checked:bg-[url("/src/assets/icons/checkmark.svg")] checked:bg-[length:16px_16px] checked:bg-no-repeat checked:bg-center',
  };

  return (
    <div className={`${checkboxFormStyle.className} ${className}`}>
      <label htmlFor={id} className={checkboxFormStyle.classNameLabelText}>
        {children}
      </label>
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className={checkboxFormStyle.classNameInput}
        aria-checked={checked ? 'true' : 'false'}
        {...rest}
      />
    </div>
  );
}

export default CheckboxForm;
