import { fetchClubList } from '@/pages/MainClub';
import { infiniteQueryOptions } from '@tanstack/react-query';
import { NavigateOptions } from 'react-router-dom';

const ININTIAL_PAGE = 1;
export function getClubListQueryOption(
  state: NavigateOptions['state'],
  perpage: number,
  loaderFunction: any
) {
  const filters = state?.filters;
  const sort = state?.sort;
  const queryKey = ['mainClub'];

  if (filters) {
    queryKey.push(filters);
  }
  if (sort) {
    queryKey.push(sort);
  }

  const queryOption = infiniteQueryOptions({
    queryKey,
    queryFn: fetchClubList(state, perpage),
    initialData: loaderFunction,
    initialPageParam: ININTIAL_PAGE,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.page < lastPage.totalPages ? allPages.length + 1 : null;
    },
  });
  return queryOption;
}
