import { Badge, Svg } from '@/components/Atoms';
import { calcDay } from '@/utils';
import { Link } from 'react-router-dom';
import { string, bool, number, object, array } from 'prop-types';

ClubCard.propTypes = {
  clubInfo: object,
  id: string,
  photo: string,
  title: string,
  expand: object,
  dateTime: string,
  isOffline: bool,
  location: string,
  limitPerson: number,
  confirmUser: array,
};

function ClubCard({
  clubInfo: {
    id,
    photo,
    title,
    expand,
    dateTime,
    isOffline,
    location,
    limitPerson,
    confirmUser,
  },
}) {
  return (
    <li key={id}>
      <Link to={`/mainClub/${id}`} className="flex flex-wrap">
        <figure className="relative mx-auto w-full">
          <img
            className="aspect-square w-full rounded-5xl border-[1px] border-bjgray-200 object-cover"
            src={photo}
            alt={title}
          />
          <Badge className="absolute left-2 top-2 w-[30%]">
            {expand.genre.title}
          </Badge>
        </figure>
        <div className="flex w-full flex-col gap-1 px-2 py-4 pt-3">
          <div className="flex justify-between">
            <h3 className="max-w-full truncate text-b-1-medium">{title}</h3>
            <button>
              <Svg id="heart" />
            </button>
          </div>
          <span className="text-pretty text-b-3-regular text-bjgray-500">
            {calcDay(dateTime)}
          </span>
          <div className="flex justify-between">
            <span className="flex items-center text-pretty text-b-3-regular text-bjgray-500">
              <Svg
                color="#9e9e9e"
                width={16}
                height={16}
                id="pin"
                className="mr-[2px] flex-shrink-0"
              />
              <span className="line-clamp-1">
                {!isOffline ? '온라인' : location}
              </span>
            </span>
            <span className="flex items-center text-b-3-regular text-bjgray-500">
              <Svg
                color="#9e9e9e"
                width={16}
                height={16}
                id="user"
                className="mr-[2px]"
              />
              {confirmUser.length ? confirmUser.length : 0}/{limitPerson}
            </span>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default ClubCard;
