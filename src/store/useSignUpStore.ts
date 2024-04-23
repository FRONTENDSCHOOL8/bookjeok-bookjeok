import { create } from 'zustand';

interface SignUpInfo {
  email: string | '';
  password: string | '';
  passwordConfirm: string | '';
  nickname: string | '';
  phone: string | '';
  birth: string | '';
  gender: 'male' | 'female' | undefined;
}
type State = {
  currentPage: 'basicInfo' | 'detailInfo';
  enteredUserInfo: SignUpInfo;
};

type Action = {
  setNextPage: () => void;
  setInfo: (enteredUserInfo: State['enteredUserInfo']) => void;
};

const INITIALINFO = {
  email: '',
  password: '',
  passwordConfirm: '',
  nickname: '',
  phone: '',
  birth: '',
  gender: undefined,
};

const useSignUpStore = create<State & Action>((set) => ({
  currentPage: 'basicInfo',
  enteredUserInfo: INITIALINFO,
  setNextPage: () => set({ currentPage: 'detailInfo' }),
  setInfo: (userInfo: SignUpInfo) =>
    set((state) => ({
      enteredUserInfo: { ...state.enteredUserInfo, userInfo },
    })),
}));

export default useSignUpStore;
