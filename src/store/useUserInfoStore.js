import { create } from 'zustand';

const useUserInfoStore = create((set) => ({
  userInfo: {},
  setUserInfo: async () => {
    try {
      const getLocalStorage = await localStorage.getItem('pocketbase_auth');
      const { model } = JSON.parse(getLocalStorage);
      set({ userInfo: model ? model : {} });
    } catch (error) {
      console.error(error);
    }
  },
  updateUserInfo: () => {},
}));

export default useUserInfoStore;
