import { create } from 'zustand';
type State = {
  paramsList: {
    filter: string;
    sort: string;
  };
};
type Action = {
  setFilter: (filter: string) => void;
  resetFilter: () => void;
  setSort: (sort: string) => void;
  resetSort: () => void;
};
type TcombineParams = (state: State) => string;

const DEFAULTPARAMS = { filter: '', sort: '' };

const useSearchParamsStore = create<State & Action>()((set) => ({
  paramsList: DEFAULTPARAMS,
  setFilter: (filter) => {
    set((state) => ({ paramsList: { ...state.paramsList, filter } }));
  },
  resetFilter: () => {
    set((state) => ({
      paramsList: { ...state.paramsList, filter: DEFAULTPARAMS.filter },
    }));
  },
  setSort: (sort: string) => {
    set((state) => ({ paramsList: { ...state.paramsList, sort } }));
  },
  resetSort: () => {
    set((state) => ({
      paramsList: { ...state.paramsList, sort: DEFAULTPARAMS.sort },
    }));
  },
}));

export default useSearchParamsStore;

export const combineParams: TcombineParams = (state) => {
  const { filter, sort } = state.paramsList;
  let url = '/main/club';

  if (filter !== '') {
    url += `?filter=${filter}`;
  }
  if (sort !== '') {
    url += (filter !== '' ? '&' : '?') + `sort=${sort}`;
  }

  return url;
};
