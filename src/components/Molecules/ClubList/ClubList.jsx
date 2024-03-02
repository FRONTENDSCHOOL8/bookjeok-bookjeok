import { string } from 'prop-types';

function ClubList({ title, img, schedule }) {
  return (
    <li className="flex justify-between bg-bjgray-100">
      <figcaption className="flex flex-col justify-around p-[12px]">
        <p className="text-h-2-semibold">{title}</p>
        <span className="text-b-3-light text-bjgray-500">{schedule}</span>
      </figcaption>
      <figure>
        <img className="h-[100px] w-[86px]" src={img} alt="" />
      </figure>
    </li>
  );
}

export default ClubList;
ClubList.propTypes = {
  title: string.isRequired,
  img: string,
  schedule: string.isRequired,
};

ClubList.displayName = 'ClubList';
