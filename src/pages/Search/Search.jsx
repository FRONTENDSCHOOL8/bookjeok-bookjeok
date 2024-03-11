import { Svg, ThinTextForm } from '@/components/Atoms';
import { Link } from 'react-router-dom';

function Search() {
  return (
    <>
      <div className="relative flex min-h-svh w-full flex-col px-4">
        <ThinTextForm type="search" backLink className="mb-6 py-2">
          검색
        </ThinTextForm>
        <ul className="py-2">
          <li className="flex h-16 items-center justify-center gap-x-4">
            <Svg id="clock" className="shrink-0" />
            <Link className="flex-grow">
              <span className="line-clamp-1 text-b-1-regular leading-10 text-bjblack">
                검색어
              </span>
            </Link>
            <button type="button" title="삭제" aria-label="삭제">
              <Svg id="clear" color="#9E9E9E" />
            </button>
          </li>
          <li className="flex h-16 items-center justify-center gap-x-4">
            <Link className="flex-grow">
              <span className="line-clamp-1 text-b-1-regular text-bjblack">
                검색어
              </span>
              <span className="line-clamp-1 text-b-2-regular text-bjgray-500">
                검색어 / 검색어
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Search;
