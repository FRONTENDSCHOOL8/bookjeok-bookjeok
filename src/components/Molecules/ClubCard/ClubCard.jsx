import { Badge, LikeButton, Svg } from '@/components/Atoms';
import { calcDay } from '@/utils';
import { array, bool, number, object, string } from 'prop-types';
import { Link } from 'react-router-dom';

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
      <figure className="relative mx-auto w-full">
        <Link to={`/mainClub/${id}`} aria-label={`${title}`}>
          <img
            className="aspect-square w-full rounded-5xl border-[1px] border-bjgray-200 object-cover"
            src={photo}
            alt={title}
          />
          <Badge className="absolute left-2 top-2 w-[30%]">
            {expand.genre.title}
          </Badge>
        </Link>
        <LikeButton active />
      </figure>
      <Link to={`/mainClub/${id}`} aria-label={`${title}`}>
        <div className="flex w-full flex-col gap-y-1 px-1 py-4 pt-3">
          <div className="flex justify-between">
            <h3 className="line-clamp-2 h-12 max-w-full text-b-1-regular">
              {title}
            </h3>
          </div>
          <span className="text-pretty text-b-3-medium text-bjgray-500">
            <Svg
              color="#9e9e9e"
              size={14}
              id="calendar"
              className="mr-[2px] inline-block align-middle"
            />
            <span className="align-middle">{calcDay(dateTime)}</span>
          </span>
          <div className="flex justify-between">
            <span className="flex items-center text-pretty text-b-3-medium text-bjgray-500">
              <Svg
                color="#9e9e9e"
                width={14}
                height={14}
                id="pin"
                className="mr-[2px] flex-shrink-0 align-middle"
              />
              <span className="line-clamp-1">
                {!isOffline ? '온라인' : location}
              </span>
            </span>
            <span className="flex items-center text-b-3-medium text-bjgray-500">
              <Svg
                color="#9e9e9e"
                width={14}
                height={14}
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
