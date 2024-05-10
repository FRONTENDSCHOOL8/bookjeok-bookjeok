import { RoundImage } from '@/components/Atoms';
import { getCreatedHoursAgo, getPbImgs } from '@/utils';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
interface TbookReviewList {
  id: string;
  title: string;
  nickname: string;
  writerCollectionId: string;
  writerID: string;
  writerImg: string | File;
  detail: string;
  img: string;
  created: string;
  collectionId: string;
}
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
}: TbookReviewList) {
  return (
    <li
      key={id}
      className="border-t-[1px] border-bjgray-200 py-4 first:border-0"
    >
      <Link to={`/bookReview/${id}`} className="block">
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
        <div className="my-[7px] flex items-start gap-x-4">
          <div>
            <p className="line-clamp-1 text-b-0-regular text-bjblack">
              {title}
            </p>
            <p className="mt-[2px] line-clamp-2 text-b-2-regular text-bjgray-500">
              {parse(detail)}
            </p>
          </div>
          <div className="ml-auto shrink-0">
            <img
              src={getPbImgs({ collectionId, id, img })}
              alt={title}
              className="aspect-square w-[70px] rounded-4xl border-[1px] border-bjgray-200 object-cover"
            />
          </div>
        </div>
      </Link>
    </li>
  );
}

export default BookReviewList;
