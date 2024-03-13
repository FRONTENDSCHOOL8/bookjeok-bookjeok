import { string } from 'prop-types';

function RoundImage({ className, size, src, alt = '', ...rest }) {
  const roundImageStyle = {
    sm: 'w-[24px] h-[24px]',
    md: 'w-[36px] h-[36px]',
    lg: 'w-[56px] h-[56px]',
    xlg: 'w-[80px] h-[80px]',
    imgWrap:
      'relative overflow-hidden rounded-full border-[1px] border-bjgray-200',
    img: 'aspect-square w-full object-cover',
  };
  const defaultProfileImage = '/defaultProfile.webp';

  return (
    <div className={`${roundImageStyle.className} ${className}`}>
      <div className={`${roundImageStyle[size]} ${roundImageStyle.imgWrap}`}>
        <img
          src={!src ? defaultProfileImage : src}
          alt={alt}
          className={roundImageStyle.img}
          {...rest}
        />
      </div>
    </div>
  );
}

export default RoundImage;

RoundImage.propTypes = {
  className: string,
  size: string,
  src: string,
  alt: string,
};
