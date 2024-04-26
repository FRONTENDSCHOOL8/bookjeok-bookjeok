import { RoundImage } from '@/components/Atoms';

interface AvatarType {
  className?: string;
  nickName?: string;
  text?: string;
  src: string;
}

function Avatar({ className = '', nickName, text, src }: AvatarType) {
  return (
    <div
      className={`mx-auto flex min-h-[102px] w-[90%] justify-center rounded-8xl bg-white shadow-sm ${className}`}
    >
      <div className="flex -translate-y-7 flex-col items-center gap-2">
        <RoundImage size="lg" src={src}></RoundImage>
        <span className="text-b-3-medium">{nickName}</span>
        <h2 className="mt-1 break-keep px-4 text-center text-b-1-medium">
          <span className="underline decoration-bjyellow-300/50 decoration-solid decoration-8 underline-offset-0">
            {text}
          </span>
        </h2>
      </div>
    </div>
  );
}

export default Avatar;
