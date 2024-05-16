interface RadioFormType {
  className?: string;
  name?: string;
  value: string;
  checked?: boolean;
  children?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function RadioForm({
  className,
  name,
  value,
  checked,
  children,
  ...rest
}: RadioFormType) {
  const radioFormStyle = {
    className: 'flex flex-row flex-nowrap justify-between items-center gap-4',
    classNameLabelText: 'text-b-2-regular text-bjblack flex-grow',
    classNameInput:
      'flex-shrink-0 appearance-none w-[24px] h-[24px] rounded-full bg-bjgray-300 checked:bg-bjyellow-400 checked:bg-[url("/src/assets/icons/checkmark.svg")] checked:bg-[length:16px_16px] checked:bg-no-repeat checked:bg-center',
  };

  return (
    <div className={`${radioFormStyle.className} ${className}`}>
      <label htmlFor={value} className={radioFormStyle.classNameLabelText}>
        {children}
      </label>
      <input
        id={value}
        type="radio"
        name={name}
        value={value}
        checked={checked}
        className={radioFormStyle.classNameInput}
        {...rest}
      />
    </div>
  );
}

export default RadioForm;
