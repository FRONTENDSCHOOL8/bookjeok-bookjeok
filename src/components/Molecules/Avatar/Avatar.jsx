import { RoundImage } from '@/components/Atoms';
import { string } from 'prop-types';

function Avatar({ className = '', src, nickName, text }) {
  return (
    <section
      className={`absolute left-[50%] top-[212px] flex min-h-[102px] w-[90%] -translate-x-[50%] justify-center rounded-8xl bg-white ${className}`}
    >
      <div className="flex -translate-y-7 flex-col items-center gap-2">
        <RoundImage className="" src={src} size="lg"></RoundImage>
        <span className="text-b-3-medium">{nickName}</span>
        <h2 className="px-4 text-center text-b-2-medium">{text}</h2>
      </div>
    </section>
  );
}

export default Avatar;

Avatar.propTypes = {
  className: string,
  nickName: string,
  text: string,
  src: string,
};
