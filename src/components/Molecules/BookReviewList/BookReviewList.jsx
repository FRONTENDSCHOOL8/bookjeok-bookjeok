import { RoundImage } from '@/components/Atoms';
import { getCreatedHoursAgo, getPbImgs } from '@/utils';
import { string } from 'prop-types';
import { Link } from 'react-router-dom';
function BookReviewList({
  id,
  title,
  nickname,
  writerCollectionId,
  writerID,
  writerImg,
  detail,
  img,
  created,
  collectionId,
}) {
  return (
    <li key={id} className="list-none py-4">
      <Link to={`/mainBookReview/${id}`} className="block">
        <div className="flex items-center gap-x-2">
          <RoundImage
            src={getPbImgs({
              collectionId: writerCollectionId,
              id: writerID,
              img: writerImg,
            })}
            alt={nickname}
            size="sm"
          ></RoundImage>
          <span className="text-b-1-medium text-bjblack">{nickname}</span>
          <span className="ml-auto whitespace-nowrap text-b-2-regular text-bjgray-500">
            {getCreatedHoursAgo(created)}
          </span>
        </div>
        <div className="my-[7px] flex items-center gap-x-2">
          <div>
            <p className="line-clamp-1 text-b-0-regular text-bjblack">
              {title}
            </p>
            <p className="line-clamp-2 text-b-2-regular text-bjgray-500">
              {detail}
            </p>
          </div>
          <div className="ml-auto shrink-0">
            <img
              src={getPbImgs({ collectionId, id, img })}
              alt={title}
              className="aspect-square w-[54px] rounded-4xl object-cover"
            />
          </div>
        </div>
      </Link>
    </li>
  );
}

export default BookReviewList;
BookReviewList.propTypes = {
  id: string,
  title: string,
  nickname: string,
  writerCollectionId: string,
  writerID: string,
  writerImg: string,
  detail: string,
  img: string,
  created: string,
  collectionId: string,
};
