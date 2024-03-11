import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useUserInfoStore = create(
  persist(
    (set) => ({
      userInfo: null,
      setUserInfo: (userInfo) => {
        console.log(userInfo);
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
