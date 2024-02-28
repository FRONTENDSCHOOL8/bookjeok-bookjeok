import RoundImage from '../RoundImage/RoundImage';

function MessageBubble() {
  return (
    <>
      <ul className="*:py-[9px]">
        <li>
          <div className="flex flex-row items-center gap-4 group-[.group-rtl]:flex-row-reverse group-[.group-rtl]:text-right">
            <div className="self-start pt-3">
              <RoundImage
                src="/src/assets/avatar.svg"
                alt="alt"
                size="md"
              ></RoundImage>
            </div>
            <div>
              <p className="text-b-2-regular text-bjgray-500">작성자</p>
              <div className="flex flex-row items-end gap-2 group-[.group-rtl]:flex-row-reverse">
                <div className="flex min-h-9 min-w-24 items-center justify-start rounded-[10px] rounded-tl-none bg-bjyellow-400 px-4 py-2 text-b-2-medium">
                  내용
                </div>
                <div className="whitespace-nowrap text-b-3-light text-bjgray-500">
                  오후 2:00
                </div>
              </div>
            </div>
          </div>
        </li>
        <li className="group-rtl group">
          <div className="flex flex-row items-center gap-4 group-[.group-rtl]:flex-row-reverse group-[.group-rtl]:text-right">
            <div className="self-start pt-3">
              <RoundImage
                src="/src/assets/avatar.svg"
                alt="alt"
                size="md"
              ></RoundImage>
            </div>
            <div>
              <p className="text-b-2-regular text-bjgray-500">작성자</p>
              <div className="flex flex-row items-end gap-2 group-[.group-rtl]:flex-row-reverse">
                <div className="m-h-9 flex min-w-24 items-center justify-start break-keep rounded-[10px] rounded-tl-none bg-bjyellow-400 px-4 py-2 text-b-2-medium group-[.group-rtl]:rounded-[10px] group-[.group-rtl]:rounded-tr-none">
                  모임에 참석하기 전에 책을 읽어오셔야 돼요 !
                </div>
                <div className="whitespace-nowrap text-b-3-light text-bjgray-500">
                  오후 2:00
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}

export default MessageBubble;
