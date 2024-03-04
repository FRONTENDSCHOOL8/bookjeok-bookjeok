import { string, number } from 'prop-types';

function Svg({
  id,
  size = 24,
  width,
  height,
  color = '#212121',
  ...restProps
}) {
  const iconStyles = { width: width ?? size, height: height ?? size, color };

  return (
    <svg aria-hidden="true" style={iconStyles} {...restProps}>
      <use href={`/icons/sprite.svg#${id}`} />
    </svg>
  );
}

Svg.propTypes = {
  id: string.isRequired,
  size: number,
  width: number,
  height: number,
  color: string,
};

export default Svg;
