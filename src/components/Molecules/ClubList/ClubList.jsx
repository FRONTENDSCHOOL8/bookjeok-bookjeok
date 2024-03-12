import { Svg } from '@/components/Atoms';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';
function ClubList({ id, title, img, schedule }) {
  return (
    <li>
      <Link
        className="bg-bjgray-50 flex h-[100px] w-full flex-row overflow-hidden rounded-5xl border-[1px] border-bjgray-200"
        to={`/mainClub/${id}`}
        aria-label={`${title} 모임 자세히 보기`}
      >
        <figcaption className="flex flex-grow flex-col justify-between p-3">
          <p className="text-b-1-medium leading-7 text-bjblack">
            <span className="line-clamp-2">{title}</span>
          </p>
          <span className="text-b-2-regular text-bjgray-500">
            <Svg
              color="#9e9e9e"
              size={14}
              id="calendar"
              className="mr-1 inline-block align-middle"
            />
            <span className="align-middle">{schedule}</span>
          </span>
        </figcaption>
        <figure className="shrink-0 basis-[100px]">
          <img
            className="aspect-square w-full object-cover"
            src={img}
            alt={`${title}`}
          />
        </figure>
      </Link>
    </li>
  );
}

export default ClubList;
ClubList.propTypes = {
  id: string.isRequired,
  title: string.isRequired,
  img: string,
  schedule: string.isRequired,
};

ClubList.displayName = 'ClubList';
