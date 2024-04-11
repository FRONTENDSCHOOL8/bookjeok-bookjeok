interface SVGProps {
  id: string;
  size?: number;
  width?: number;
  height?: number;
  color?: string;
  [key: string]: any;
}

function Svg({
  id,
  size = 24,
  width,
  height,
  color = '#212121',
  ...restProps
}: SVGProps) {
  const iconStyles = { width: width ?? size, height: height ?? size, color };

  return (
    <svg aria-hidden="true" style={iconStyles} {...restProps}>
      <use href={`/icons/sprite.svg#${id}`} />
    </svg>
  );
}

export default Svg;
