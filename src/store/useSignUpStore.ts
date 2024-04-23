import { create } from 'zustand';

interface SignUpInfo {
  email?: string;
  password?: string;
  passwordConfirm?: string;
  nickname?: string;
  phone?: string;
  birth?: string;
  gender?: 'male' | 'female';
  emailVisibility: boolean;
}
type State = {
  currentPage: 'basicInfo' | 'detailInfo';
  enteredUserInfo: SignUpInfo;
};

type Action = {
  setNextPage: (page: 'basicInfo' | 'detailInfo') => void;
  setInfo: (enteredUserInfo: State['enteredUserInfo']) => void;
};

const useSignUpStore = create<State & Action>((set) => ({
  currentPage: 'basicInfo',

  enteredUserInfo: <SignUpInfo>{},

  setNextPage: (page) => set({ currentPage: page }),

  setInfo: (userInfo) =>
    set((state) => ({
      enteredUserInfo: { ...state.enteredUserInfo, userInfo },
    })),
}));

export default useSignUpStore;
