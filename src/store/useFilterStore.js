import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

const filterStore = (set) => ({
  filterList: [],
  addFilter: (filterKey) => {
    set(
      (state) => ({
        filterList: [...state.filterList, filterKey],
      }),
      false,
      'addFilter'
    );
  },
  removeFilter: (filterKey) => {
    set(
      (state) => ({
        filterList: state.filterList.filter((f) => f !== filterKey),
      }),
      false,
      'removeFilter'
    );
  },
  resetFilter: () => {
    set(
      () => ({
        filterList: [],
      }),
      false,
      'resetFilter'
    );
  },
});

const useFilterStore = create(devtools(filterStore));

export default useFilterStore;

export const getFilterStrings = (state) => state.filterList.join(',');
