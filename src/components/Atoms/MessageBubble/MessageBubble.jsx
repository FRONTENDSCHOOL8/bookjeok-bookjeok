import { string } from 'prop-types';
import RoundImage from '../RoundImage/RoundImage';

function MessageBubble({ align = 'left', src, alt, nickname, children, time }) {
  const messageBubbleStyle = {
    left: 'group-left',
    right: 'group-right',
  };

  return (
    <>
      <li className={`${messageBubbleStyle[align]} group`}>
        <div className="flex flex-row items-center gap-4 group-[.group-right]:flex-row-reverse group-[.group-right]:text-right">
          <div className="self-start pt-3">
            <RoundImage src={src} alt={alt} size="md"></RoundImage>
          </div>
          <div className="basis-4/5">
            <p className="text-b-2-regular text-bjgray-500">{nickname}</p>
            <div className="flex flex-row items-end gap-2 group-[.group-right]:flex-row-reverse">
              <div className="flex min-h-9 items-center justify-start whitespace-pre-line break-keep rounded-[10px] rounded-tl-none bg-bjgray-200 px-4 py-2 text-b-2-medium group-[.group-right]:justify-end group-[.group-left]:rounded-tl-none group-[.group-right]:rounded-tl-[10px] group-[.group-right]:rounded-tr-none group-[.group-right]:bg-bjyellow-400">
                {children}
              </div>
              <time
                className="whitespace-nowrap text-b-3-light text-bjgray-500"
                dateTime={time}
              >
                {time}
              </time>
            </div>
          </div>
        </div>
      </li>
    </>
  );
}

export default MessageBubble;

MessageBubble.propTypes = {
  align: string,
  src: string,
  alt: string,
  nickname: string,
  children: string,
  time: string,
};
