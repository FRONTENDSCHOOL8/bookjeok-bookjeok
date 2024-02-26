import { string } from 'prop-types';

function RoundImage({ className, src, alt, ...rest }) {
  const roundImageStyle = {
    sm: 'w-[24px] h-[24px]',
    md: 'w-[36px] h-[36px]',
    lg: 'w-[56px] h-[56px]',
  };

  return (
    <div
      className={`${roundImageStyle[className]} relative overflow-hidden rounded-full border-[1px] border-bjgray-200`}
    >
      <img
        src={src}
        alt={alt}
        className="w-full aspect-square object-cover"
        {...rest}
      />
    </div>
  );
}

export default RoundImage;
RoundImage.propTypes = {
  className: string,
  src: string,
  alt: string,
};
