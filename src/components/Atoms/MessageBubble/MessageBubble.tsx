import { RoundImage } from '@/components/Atoms';
import { convertTime } from '@/utils';

type TMessageBubble = {
  align: 'left' | 'right';
  src: string;
  alt: string;
  nickname: string;
  children: React.ReactNode;
  time: string;
};

const MessageBubble = ({
  align = 'left',
  src,
  alt,
  nickname,
  children,
  time,
}: TMessageBubble) => {
  const messageBubbleStyle = {
    left: 'group-left',
    right: 'group-right',
  };

  return (
    <>
      <li className={`${messageBubbleStyle[align]} group`}>
        <div className="flex flex-row items-center gap-2 group-[.group-right]:flex-row-reverse group-[.group-right]:text-right">
          {align === 'left' ? (
            <div className="self-start pt-3">
              <RoundImage src={src} alt={alt} size="md"></RoundImage>
            </div>
          ) : null}
          <div className="basis-4/5">
            {align === 'left' ? (
              <p className="text-b-2-regular text-bjgray-500">{nickname}</p>
            ) : null}
            <div className="flex flex-row items-end gap-2 group-[.group-right]:flex-row-reverse">
              <div className="flex min-h-9 items-center justify-start whitespace-pre-wrap rounded-[10px] rounded-tl-none bg-bjgray-200 px-4 py-2 text-b-2-medium group-[.group-right]:justify-end group-[.group-left]:rounded-tl-none group-[.group-right]:rounded-tl-[10px] group-[.group-right]:rounded-tr-none group-[.group-right]:bg-bjyellow-400 group-[.group-right]:text-left">
                {children}
              </div>
              <time
                className="whitespace-nowrap text-b-3-light text-bjgray-500"
                dateTime={convertTime(time, 2)}
              >
                {convertTime(time, 2)}
              </time>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default MessageBubble;
