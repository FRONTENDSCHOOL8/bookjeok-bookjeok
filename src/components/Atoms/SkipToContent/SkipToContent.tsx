interface SkipToContentType {
  id: string;
  children: React.ReactNode;
}

/*
  transform 등으로 화면 보이는 영역 밖에 존재하다가 tab시 화면 안 으로 들어옴 
  tab index 가장 최상단으로 존재
*/

export default function SkipToContent({ id, children }: SkipToContentType) {
  return (
    <a
      className="absolute z-50 h-[40px] translate-y-[-100%] bg-bjyellow-100 text-center text-black focus:translate-y-0"
      href={`#${id}`}
    >
      {children}
    </a>
  );
}
