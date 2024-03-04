import { RoundImage } from '@/components/Atoms';
import { string } from 'prop-types';

function Avatar({ className = '', nickName, text }) {
  return (
    <section
      className={`absolute left-[50%] top-[212px] flex h-[102px] w-[90%] -translate-x-[50%] justify-center rounded-8xl bg-white ${className}`}
    >
      <div className="flex -translate-y-7 flex-col items-center gap-2">
        <RoundImage className="" size="lg"></RoundImage>
        <span className="text-b-3-medium">{nickName}</span>
        <span>{text}</span>
      </div>
    </section>
  );
}

export default Avatar;

Avatar.propTypes = {
  className: string,
  nickName: string,
  text: string,
};
