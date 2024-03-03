import { string } from 'prop-types';
import { Link } from 'react-router-dom';
function ClubList({ id, title, img, schedule }) {
  return (
    <li className="bg-bjgray-100">
      <Link
        className="flex h-[100px] w-full flex-row overflow-hidden rounded-5xl bg-bjgray-100"
        to={`/mainClub/${id}`}
      >
        <figcaption className="flex flex flex-grow flex-col justify-between  p-3 ">
          <p className="line-clamp-1 text-h-2-semibold text-h-2-semibold leading-9 text-bjblack">
            {title}
          </p>
          <span className=" text-b-3-light leading-9 text-bjgray-500">
            {schedule}
          </span>
        </figcaption>
        <figure className="shrink-0 basis-20">
          <img
            className="h-[100px] w-[86px] w-full object-cover"
            src={img}
            alt=""
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
