import { RoundImage } from '@/components/Atoms';
import { getCreatedHoursAgo } from '@/utils';
import { memo } from 'react';
import { Link } from 'react-router-dom';

interface TChatList {
  id: string;
  src: string;
  title: string;
  updated: string;
  message: string;
}
const ChatList = ({ id, src, title, updated, message }: TChatList) => {
  return (
    <li>
      <Link to={`/chatRoom/${id}`} className="flex h-16 items-center gap-x-4">
        <RoundImage src={src} alt="" size="md"></RoundImage>
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col">
            <span className="line-clamp-1 text-b-1-regular text-bjblack">
              {title}
            </span>
            <p className="max-w-[290px] truncate text-b-2-regular text-bjgray-500">
              {message}
            </p>
          </div>
          <span className="whitespace-nowrap pl-2 text-b-3-light text-bjgray-400">
            {getCreatedHoursAgo(updated)}
          </span>
        </div>
      </Link>
    </li>
  );
};
export default memo(ChatList);
