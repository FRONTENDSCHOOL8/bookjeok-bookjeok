import { string, bool, number } from 'prop-types';
import Svg from '../../Svg/Svg';
import { Link } from 'react-router-dom';

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
  path,
  backLink = false,
  sendButton = false,
  ...rest
}) {
  const thinTextFormStyle = {
    className: 'flex flex-col',
    input:
      'bg-transparent text-b-1-regular text-bjblack placeholder:text-b-1-regular placeholder:text-bjgray-500 read-only:text-bjblack focus:outline-none disabled:text-bjgray-500',
  };

  return (
    <div className={thinTextFormStyle.className}>
      <div className="peer flex h-[40px] flex-row gap-4 rounded-5xl border-[1px] border-bjgray-100 bg-bjgray-100 px-4 py-2 focus-within:border-bjgray-500 has-[:invalid]:border-bjred-400 has-[:required]:border-bjred-400 has-[:disabled]:bg-bjgray-200">
        <div className="order-1 flex flex-grow flex-col">
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
            className={thinTextFormStyle.input}
            {...rest}
          />
        </div>
        {backLink && (
          <Link to={path} title="뒤로 가기" aria-label="뒤로 가기">
            <Svg id="arrow-left" />
          </Link>
        )}
        {sendButton && (
          <button
            type="submit"
            title="보내기"
            aria-label="보내기"
            className="order-2 text-b-1-medium text-bjblack"
          >
            <Svg id="send" />
          </button>
        )}
      </div>
    </div>
  );
}

export default ThinTextForm;

ThinTextForm.propTypes = {
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
  path: string,
  backLink: bool,
  sendButton: bool,
};
