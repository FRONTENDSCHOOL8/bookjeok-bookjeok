import { createRandomId } from '@/utils';
import { create } from 'zustand';

interface TclubInfo {
  id: string | undefined;
  chattingRoom?: string | undefined;
  isOffline: boolean | undefined;
  location: string;
  genre: string | undefined;
  img: File | undefined;
  alt: string | undefined;
  title: string | undefined;
  detail: string | undefined;
  dateTime: string | undefined;
  limitPerson: number | undefined;
  query: string | undefined;
  createUser: string | undefined;
}
type State = {
  clubInfo: TclubInfo;
};
type Action = {
  setId: (id: string) => void;
  setUserId: (createUser: string) => void;
  changeLocationType: (isOffline: boolean) => void;
  addPlaceName: (location: string) => void;
  addGenre: (genre: string) => void;
  removeGenre: () => void;
  setImage: (file: File) => void;
  removeImage: () => void;
  addTitle: (text: string) => void;
  addDetail: (text: string) => void;
  setDateTime: (dateTime: string) => void;
  setLimit: (limitPerson: number) => void;
  setQuery: (query: string) => void;
  resetClubInfo: () => void;
};

const DEFALUT_CLUB_INFO = {
  id: createRandomId(),
  chattingRoom: '',
  isOffline: false,
  location: '',
  genre: '',
  img: undefined,
  alt: '',
  title: undefined,
  detail: undefined,
  dateTime: undefined,
  limitPerson: 3,
  query: undefined,
  createUser: undefined,
};
const useCreateClubStore = create<State & Action>()((set) => ({
  clubInfo: DEFALUT_CLUB_INFO,
  setId: (id) => {
    set((state) => ({ clubInfo: { ...state.clubInfo, id } }), false);
  },
  setUserId: (createUser) => {
    set((state) => ({ clubInfo: { ...state.clubInfo, createUser } }), false);
  },
  changeLocationType: (isOffline) => {
    set(
      (state) => ({ clubInfo: { ...state.clubInfo, isOffline, location: '' } }),
      false
    );
  },
  addPlaceName: (location) => {
    set(
      (state) => ({
        clubInfo: { ...state.clubInfo, location },
      }),
      false
    );
  },
  addGenre: (genre) => {
    set(
      (state) => ({
        clubInfo: {
          ...state.clubInfo,
          genre,
        },
      }),
      false
    );
  },
  removeGenre: () => {
    set(
      (state) => ({
        clubInfo: {
          ...state.clubInfo,
          genre: '',
        },
      }),
      false
    );
  },
  setImage: (file) => {
    set(
      (state) => ({
        clubInfo: {
          ...state.clubInfo,
          img: file,
          alt: file.name,
        },
      }),
      false
    );
  },
  removeImage: () => {
    set(
      (state) => ({
        clubInfo: {
          ...state.clubInfo,
          img: undefined,
          alt: '',
        },
      }),
      false
    );
  },
  addTitle: (text) => {
    set(
      (state) => ({
        clubInfo: {
          ...state.clubInfo,
          title: text,
        },
      }),
      false
    );
  },
  addDetail: (text) => {
    set(
      (state) => ({
        clubInfo: {
          ...state.clubInfo,
          detail: text,
        },
      }),
      false
    );
  },
  setDateTime: (dateTime) => {
    set(
      (state) => ({
        clubInfo: {
          ...state.clubInfo,
          dateTime,
        },
      }),
      false
    );
  },
  setLimit: (limitPerson) => {
    set(
      (state) => ({
        clubInfo: {
          ...state.clubInfo,
          limitPerson: limitPerson * 1,
        },
      }),
      false
    );
  },
  setQuery: (query) => {
    set(
      (state) => ({
        clubInfo: {
          ...state.clubInfo,
          query,
        },
      }),
      false
    );
  },
  resetClubInfo: () => {
    set(
      () => ({
        clubInfo: DEFALUT_CLUB_INFO,
      }),
      false
    );
  },
}));

// const useCreateClubStore = create(devtools(clubInfoStore));
export default useCreateClubStore;
