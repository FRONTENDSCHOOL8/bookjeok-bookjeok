import { RoundImage } from '@/components/Atoms';
interface TUserList {
  src?: string;
  confirmed?: boolean;
  photo?: string;
  nickname?: string | undefined;
  answer?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const UserList = ({ nickname, src }: TUserList) => {
  return (
    <div>
      <dl className="flex flex-col">
        <div className="flex flex-grow flex-row items-center gap-4">
          <RoundImage src={src} alt={nickname} size="md"></RoundImage>
          <p>{nickname}</p>
        </div>
      </dl>
    </div>
  );
};

export default UserList;
