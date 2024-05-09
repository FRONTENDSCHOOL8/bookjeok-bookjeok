import { convertTime } from '@/utils';

const ChatDate = ({ thisDay }: { thisDay: Date | string }) => {
  return (
    <li className="mt-4 px-8 text-center text-xs text-zinc-500">
      {convertTime(thisDay, 3)}
    </li>
  );
};

export default ChatDate;
