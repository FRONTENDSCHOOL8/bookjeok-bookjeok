import { string, bool, number } from 'prop-types';
import Svg from '../../Svg/Svg';

function ThinTextForm({
  type,
  id,
  name,
  value,
  defaultValue,
  placeholder,
  required,
  minLength,
  maxLength,
  children,
  svgIcon = false,
  svgId,
  align = 'left',
  buttonTitle,
  ...rest
}) {
  const buttonStyle = {
    left: 'flex-row-reverse',
    right: 'flex-row',
  };

  let svgElement = null;

  if (svgIcon) {
    svgElement = (
      <button type="button" title={buttonTitle} aria-label={buttonTitle}>
        <Svg id={svgId} />
      </button>
    );
  }

  return (
    <div className="flex flex-col">
      <div
        className={`flex flex-row gap-4 items-center px-4 h-[40px] rounded-5xl bg-bjgray-100 border-[1px] border-bjgray-100 focus-within:border-bjgray-500 has-[:disabled]:bg-bjgray-200 has-[:invalid]:border-bjred-400 has-[:required]:border-bjred-400 peer ${buttonStyle[align]}`}
      >
        <div className="flex flex-col flex-grow">
          <label htmlFor={id} className="sr-only">
            {children}
          </label>
          <input
            type={type}
            id={id}
            name={name}
            value={value}
            defaultValue={defaultValue}
            placeholder={placeholder}
            required={required}
            minLength={minLength}
            maxLength={maxLength}
            className="bg-transparent focus:outline-none text-b-1-regular text-bjblack  placeholder:text-b-1-regular placeholder:text-bjgray-500 disabled:text-bjgray-500 read-only:text-bjblack"
            {...rest}
          />
        </div>
        {svgElement}
      </div>
    </div>
  );
}

export default ThinTextForm;

ThinTextForm.propTypes = {
  align: string,
  buttonTitle: string,
  svgIcon: bool,
  svgId: string,
  children: string,
  type: string,
  id: string,
  name: string,
  value: string,
  defaultValue: string,
  placeholder: string,
  required: bool,
  minLength: number,
  maxLength: number,
};
