import { getDay } from '@/utils';

const ChatDate = ({ thisDay }: { thisDay: Date }) => {
  const year = thisDay.getFullYear();
  const month = String(thisDay.getMonth() + 1).padStart(2, '0');
  const date = thisDay.getDate();
  const day = getDay(`${year}-${month}-${date}`);

  return (
    <li className="mt-4 px-8 text-center text-xs text-zinc-500">{`${year}년 ${month}월 ${date}일 ${day}`}</li>
  );
};

export default ChatDate;
