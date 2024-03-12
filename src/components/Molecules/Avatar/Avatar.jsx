import { RoundImage } from '@/components/Atoms';
import { string } from 'prop-types';

function Avatar({ className = '', nickName, text, src }) {
  return (
    <div
      className={`mx-auto flex min-h-[102px] w-[90%] justify-center rounded-8xl bg-white ${className}`}
    >
      <div className="flex -translate-y-7 flex-col items-center gap-2">
        <RoundImage size="lg" src={src}></RoundImage>
        <span className="text-b-3-medium">{nickName}</span>
        <h2 className="break-keep px-4 text-center text-b-1-medium">{text}</h2>
      </div>
    </div>
  );
}

export default Avatar;

Avatar.propTypes = {
  className: string,
  nickName: string,
  text: string,
  src: string,
};
