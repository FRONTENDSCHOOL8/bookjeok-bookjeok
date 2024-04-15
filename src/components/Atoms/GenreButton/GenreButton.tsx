import { GenresResponse } from '@/types/pocketbase-types';
import { ButtonHTMLAttributes } from 'react';

interface TGenreButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  filterData: GenresResponse;
  clubInfo: any;
}

export default function GenreButton({
  filterData: { title, id },
  clubInfo,
  onClick,
}: TGenreButton) {
  const BASE_SYTLE = {
    className: 'h-9 rounded-5xl border px-4 text-b-2-medium',
  };

  return (
    <button
      type="button"
      name={title}
      value={id}
      onClick={onClick}
      className={`${BASE_SYTLE.className} ${clubInfo.genre !== null && clubInfo.genre === id ? 'bg-black text-white' : 'bg-white text-bjblack'}`}
    >
      {title}
    </button>
  );
}
