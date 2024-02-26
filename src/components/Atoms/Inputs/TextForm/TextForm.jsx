import { string, bool, number } from 'prop-types';
import Svg from '../../Svg/Svg';

function TextForm({
  type,
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
  description,
  children,
  svgIcon = false,
  svgId,
  hiddenLabel = false,
  ...rest
}) {
  let svgElement = null;

  if (svgIcon) {
    svgElement = (
      <div>
        <Svg id={svgId} />
      </div>
    );
  }

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
    <div className="flex flex-col">
      <div className="flex flex-row gap-4 items-center px-4 h-[64px] rounded-5xl bg-bjgray-100 border-[1px] border-bjgray-100 focus-within:border-bjgray-500 has-[:disabled]:bg-bjgray-200 has-[:invalid]:border-bjred-400 peer">
        {svgElement}
        <div className="flex flex-col flex-grow">
          {labelElement}
          <input
            type={type}
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
            className="bg-transparent focus:outline-none text-b-1-regular text-bjblack  placeholder:text-b-1-regular placeholder:text-bjgray-500 disabled:text-bjgray-500 read-only:text-bjblack"
            {...rest}
          />
        </div>
      </div>
      <p className="mt-2 px-4 text-b-2-regular text-bjgray-500 peer-has-[:invalid]:text-bjred-500 peer-[.error]:text-bjred-400">
        {description}
      </p>
    </div>
  );
}

export default TextForm;

TextForm.propTypes = {
  svgIcon: bool,
  svgId: string,
  hiddenLabel: bool,
  children: string,
  type: string,
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
  description: string,
};
