import { createRandomId } from '@/utils';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const clubInfoStore = (set) => ({
  clubInfo: {
    id: createRandomId(),
    isOffline: false,
    location: '',
    genre: null,
    img: null,
    alt: null,
    title: null,
    detail: null,
    dateTime: null,
    limitPerson: 3,
    query: null,
    createUser: null,
  },
  setId: (id) => {
    set(
      (state) => ({
        clubInfo: { ...state.clubInfo, id },
      }),
      false,
      'setId'
    );
  },
  setUserId: (createUser) => {
    set(
      (state) => ({
        clubInfo: { ...state.clubInfo, createUser },
      }),
      false,
      'setUserId'
    );
  },
  changeLocationType: (isOffline) => {
    set(
      (state) => ({
        clubInfo: { ...state.clubInfo, isOffline, location: '' },
      }),
      false,
      'changeLocationType'
    );
  },
  addPlaceName: (location) => {
    set(
      (state) => ({
        clubInfo: { ...state.clubInfo, location },
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
          genre,
        },
      }),
      false,
      'addGenre'
    );
  },
  removeGenre: () => {
    set(
      (state) => ({
        clubInfo: {
          ...state.clubInfo,
          genre: null,
        },
      }),
      false,
      'removeGenre'
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
      false,
      'setImage'
    );
  },
  removeImage: () => {
    set(
      (state) => ({
        clubInfo: {
          ...state.clubInfo,
          img: null,
          alt: null,
        },
      }),
      false,
      'removeImage'
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
      false,
      'addTitle'
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
      false,
      'addDetail'
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
      false,
      'setDateTime'
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
      false,
      'setLimit'
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
      false,
      'setQuery'
    );
  },
  resetClubInfo: () => {
    set(
      () => ({
        clubInfo: {
          isOffline: false,
          location: '',
          genre: null,
          img: null,
          alt: null,
          title: null,
          detail: null,
          dateTime: null,
          limitPerson: 3,
          query: null,
          createUser: null,
        },
      }),
      false,
      'resetClubInfo'
    );
  },
});

const useCreateClubStore = create(devtools(clubInfoStore));
export default useCreateClubStore;
