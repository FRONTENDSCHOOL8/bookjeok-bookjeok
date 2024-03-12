import { string, object, func } from 'prop-types';

export default function GenreButton({
  filterData: { title, id },
  state,
  onClick,
}) {
  const BASE_SYTLE = {
    className: 'h-9 rounded-5xl border px-4 text-b-2-medium',
  };

  return (
    <button
      type="button"
      name={title}
      value={id}
      onClick={onClick}
      className={`${BASE_SYTLE.className} ${state.genre !== null && state.genre.includes(id) ? 'bg-black text-white' : 'bg-white text-bjblack'}`}
    >
      {title}
    </button>
  );
}

GenreButton.propTypes = {
  state: object,
  title: string,
  id: string,
  onClick: func,
  filterData: object,
};
