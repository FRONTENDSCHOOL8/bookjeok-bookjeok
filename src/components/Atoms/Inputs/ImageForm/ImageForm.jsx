import { string } from 'prop-types';
import Svg from '../../Svg/Svg';

function ImageForm({ className, src, alt, ...rest }) {
  const imageFormStyle = {
    className: 'flex justify-center gap-2',
  };

  return (
    <div className={`${imageFormStyle.className} ${className}`}>
      <label className="relative box-content block h-16 w-16 rounded-[8px] border-[1px] border-bjgray-500 bg-white hover:bg-gray-50">
        <span className="sr-only">사진 선택</span>
        <Svg
          id="camera"
          color="9E9E9E"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
        <input
          type="file"
          className="h-16 w-16 appearance-none file:m-0 file:h-16 file:w-16 file:appearance-none file:border-none file:bg-transparent file:p-0 file:text-transparent file:outline-none"
          {...rest}
        />
      </label>
      <div className="relative">
        <img
          src={src}
          alt={alt}
          className="box-content aspect-square h-16 w-16 rounded-[8px] border-[1px] border-bjgray-500 bg-white object-cover"
        />
        <button
          type="button"
          className="absolute right-1 top-1 rounded-full opacity-50"
        >
          <span className="sr-only">삭제</span>
          <Svg id="clear" color="#FFFFFF" width={18} height={18} />
        </button>
      </div>
    </div>
  );
}

export default ImageForm;

ImageForm.propTypes = {
  className: string,
  src: string,
  alt: string,
};
