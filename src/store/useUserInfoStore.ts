import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { UsersResponse } from '@/types/pocketbase-types';
type State = {
  userInfo: null | UsersResponse;
};

type Action = {
  setUserInfo: (userInfo: UsersResponse & { token: string }) => void;
  clearUserInfo: () => void;
};

const useUserInfoStore = create<State & Action>()(
  persist(
    (set) => ({
      userInfo: null,
      setUserInfo: (userInfo) => {
        set({
          userInfo,
        });
      },
      clearUserInfo: () => {
        set({
          userInfo: null,
        });
      },
    }),
    {
      name: 'pb/auth',
    }
  )
);

export default useUserInfoStore;
