import { create } from 'zustand';

type State = {
  filterList: string[];
};
type Action = {
  addFilter: (filterKey: string) => void;
  removeFilter: (filterKey: string) => void;
  resetFilter: () => void;
};
type TgetFilterStrings = (state: State) => string;

const useFilterStore = create<State & Action>()((set) => ({
  filterList: [],
  addFilter: (filterKey) => {
    set(
      (state) => ({
        filterList: [...state.filterList, filterKey],
      }),
      false
    );
  },
  removeFilter: (filterKey) => {
    set(
      (state) => ({
        filterList: state.filterList.filter((f) => f !== filterKey),
      }),
      false
    );
  },
  resetFilter: () => {
    set(
      () => ({
        filterList: [],
      }),
      false
    );
  },
}));

export default useFilterStore;

export const getFilterStrings: TgetFilterStrings = (state) =>
  state.filterList.join(',');
