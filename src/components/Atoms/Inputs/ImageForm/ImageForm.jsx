import { string, func, object, bool } from 'prop-types';
import { Svg } from '@/components/Atoms';

function ImageForm({
  className,
  onChange,
  onClick,
  id,
  name,
  src,
  alt,
  required = true,
  srOnly = '사진업로드',
  ...rest
}) {
  const imageFormStyle = {
    className: 'flex justify-center gap-2',
  };

  return (
    <div className={`${imageFormStyle.className} ${className}`}>
      <div className="relative box-content block h-16 w-16 rounded-[8px] border-[1px] border-bjgray-500 bg-white hover:bg-bjgray-200">
        <label htmlFor={id}>
          <span className="sr-only">{srOnly}</span>
          <Svg
            id="camera"
            color="9E9E9E"
            className="absolute left-1/2 top-1/2 -mt-1 -translate-x-1/2 -translate-y-1/2"
          />
          <span className="absolute left-1/2 top-1/2 mt-4 -translate-x-1/2 -translate-y-1/2 text-b-3-regular text-bjgray-500">
            {required ? '(필수)' : '(선택)'}
          </span>
        </label>
        <input
          type="file"
          accept="image/*"
          id={id}
          name={name}
          onChange={onChange}
          className="h-16 w-16 appearance-none file:m-0 file:h-16 file:w-16 file:appearance-none file:border-none file:bg-transparent file:p-0 file:text-transparent file:outline-none"
          {...rest}
        />
      </div>
      {src ? (
        <div className="relative">
          <img
            src={URL.createObjectURL(src)}
            alt={alt}
            className="box-content aspect-square h-16 w-16 rounded-[8px] border-[1px] border-bjgray-500 bg-white object-cover"
          />
          <button
            type="button"
            onClick={onClick}
            className="absolute right-1 top-1 rounded-full bg-white opacity-90"
          >
            <span className="sr-only">삭제</span>
            <Svg id="clear" color="#212121" size={20} />
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}

export default ImageForm;

ImageForm.propTypes = {
  className: string,
  src: object,
  alt: string,
  onChange: func,
  onClick: func,
  id: string,
  name: string,
  required: bool,
  srOnly: string,
};
