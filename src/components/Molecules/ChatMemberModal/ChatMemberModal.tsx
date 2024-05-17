import { UsersResponse } from '@/types/pocketbase-types';
import { getPbImgs } from '@/utils';
import UserList from '../UserList/UserList';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

interface TChatMemberModal {
  open: boolean;
  users: UsersResponse[] | undefined;
  onClickBlank: (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => void;
}
const ChatMemberModal = ({ open, users, onClickBlank }: TChatMemberModal) => {
  gsap.registerPlugin(useGSAP);
  useGSAP(
    () => {
      if (open) {
        gsap.to(
          '.modal',
          // { x: '100%', opacity: 0 },
          { x: '0', opacity: 1, ease: 'power3.in' }
        );
      } else {
        gsap.to('.modal', { x: '100%', opacity: 0, ease: 'power3.in' });
      }
    },
    { dependencies: [open] }
  );
  return (
    <>
      <div className="modal absolute right-0 z-[100] h-[calc(100svh-56px)] w-[70%] translate-x-[100%] bg-white p-4 opacity-0">
        <h3 className="p-2 text-b-1-medium">참여중인 멤버</h3>
        <hr />
        <div className="flex flex-col gap-4 pt-2">
          {users?.map((user) => (
            <UserList
              key={user.id}
              nickname={user.nickname}
              src={getPbImgs(user)}
            ></UserList>
          ))}
        </div>
      </div>
      {open ? (
        <div
          onClick={onClickBlank}
          className="fixed bottom-0 z-10 h-[calc(100svh-56px)] w-full max-w-[430px] bg-bjblack bg-opacity-70"
        />
      ) : null}
    </>
  );
};

export default ChatMemberModal;
