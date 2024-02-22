import { string } from 'prop-types';

function Svg({ width = '24', height = '24', id }) {
  return (
    <svg
      aria-hidden="true"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      role="img"
    >
      <use href={`src/assets/icons/_sprite.svg#${id}`} />
    </svg>
  );
}

Svg.propTypes = {
  width: string,
  height: string,
  id: string,
};

export default Svg;
