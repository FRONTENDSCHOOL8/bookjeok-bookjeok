import { string, bool } from 'prop-types';

function CheckboxForm({ id, name, value, checked, children, ...rest }) {
  const checkboxFormStyle = {
    className: 'flex flex-row flex-nowrap justify-between items-center gap-4',
    classNameLabelText: 'text-b-2-regular text-bjblack',
    classNameInput:
      'flex-shrink-0 appearance-none w-[24px] h-[24px] rounded-full bg-bjgray-300 checked:bg-bjyellow-400 checked:bg-[url("/src/assets/icons/checkmark.svg")] checked:bg-[length:16px_16px] checked:bg-no-repeat checked:bg-center focus:outline-none focus-visible:ring focus-visible:ring-bjblack/10',
  };

  return (
    <div className={checkboxFormStyle.className}>
      <label htmlFor={id} className={checkboxFormStyle.classNameLabelText}>
        {children}
      </label>
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        checked={checked}
        {...rest}
        className={checkboxFormStyle.classNameInput}
      />
    </div>
  );
}

export default CheckboxForm;

CheckboxForm.propTypes = {
  id: string,
  name: string,
  value: string,
  checked: bool,
  children: string,
};
