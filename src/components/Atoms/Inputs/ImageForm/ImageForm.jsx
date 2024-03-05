import { string, func, object } from 'prop-types';
import { Svg } from '@/components/Atoms';

function ImageForm({
  className,
  onChange,
  onClick,
  id,
  name,
  src,
  alt,
  ...rest
}) {
  const imageFormStyle = {
    className: 'flex justify-center gap-2',
  };

  return (
    <div className={`${imageFormStyle.className} ${className}`}>
      <div className="relative box-content block h-16 w-16 rounded-[8px] border-[1px] border-bjgray-500 bg-white hover:bg-gray-50">
        <label htmlFor={id}>
          <span className="sr-only">사진 업로드</span>
          <Svg
            id="camera"
            color="9E9E9E"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          />
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
            className="absolute right-1 top-1 rounded-full opacity-50"
          >
            <span className="sr-only">삭제</span>
            <Svg id="clear" color="Ffffff" size={18} />
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
};
