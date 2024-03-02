import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const clubInfoStore = (set) => ({
  clubInfo: {
    location: 'online',
    placeName: '',
    genre: [],
    image: null,
    alt: null,
    clubTitle: null,
    clubDetail: null,
  },
  changeLocationType: (location) => {
    set(
      (state) => ({
        clubInfo: { ...state.clubInfo, location, placeName: '' },
      }),
      false,
      'changeLocationType'
    );
  },
  addPlaceName: (placeName) => {
    set(
      (state) => ({
        clubInfo: { ...state.clubInfo, placeName },
      }),
      false,
      'addPlaceName'
    );
  },
  addGenre: (genre) => {
    set(
      (state) => ({
        clubInfo: {
          ...state.clubInfo,
          genre: [...state.clubInfo.genre, genre],
        },
      }),
      false,
      'addGenre'
    );
  },
  removeGenre: (genre) => {
    set(
      (state) => ({
        clubInfo: {
          ...state.clubInfo,
          genre: state.clubInfo.genre.filter((item) => item !== genre),
        },
      }),
      false,
      'removeGenre'
    );
  },
  // https://pocketbase.io/docs/files-handling/#file-url 나중에 pb업로드 할때 이미지 처리 참고
  setImage: (file) => {
    set(
      (state) => ({
        clubInfo: {
          ...state.clubInfo,
          image: file,
          alt: file.name,
        },
      }),
      false,
      'setImage'
    );
  },
  removeImage: () => {
    set(
      (state) => ({
        clubInfo: {
          ...state.clubInfo,
          image: null,
          alt: null,
        },
      }),
      false,
      'removeImage'
    );
  },
  addTitle: (title) => {
    set(
      (state) => ({
        clubInfo: {
          ...state.clubInfo,
          clubTitle: title,
        },
      }),
      false,
      'addTitle'
    );
  },
  addDetail: (detail) => {
    set(
      (state) => ({
        clubInfo: {
          ...state.clubInfo,
          clubDetail: detail,
        },
      }),
      false,
      'addDetail'
    );
  },
  resetClubInfo: () => {
    set(
      () => ({
        clubInfo: { location: 'online', placeName: '' },
      }),
      false,
      'resetClubInfo'
    );
  },
});

const useCreateClubStore = create(devtools(clubInfoStore));
export default useCreateClubStore;
