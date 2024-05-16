interface RoundImageType {
  size: 'sm' | 'md' | 'lg' | 'xlg';
  src: string;
  alt?: string;
}

function RoundImage({ size, src, alt = '', ...rest }: RoundImageType) {
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
    <div className={`${roundImageStyle[size]} ${roundImageStyle.imgWrap}`}>
      <img
        src={src || defaultProfileImage}
        alt={alt}
        className={roundImageStyle.img}
        {...rest}
      />
    </div>
  );
}

export default RoundImage;
