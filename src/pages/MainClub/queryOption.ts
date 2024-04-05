import { infiniteQueryOptions } from '@tanstack/react-query';
import { fetchClubList } from './fetchClubList';

const ININTIAL_PAGE = 1;
export function getClubListQueryOption(
  filters: string,
  perpage: number,
  loaderfunction: any
) {
  const queryKey = ['mainClub'];

  if (filters) {
    queryKey.push(filters);
  }

  const queryOption = infiniteQueryOptions({
    queryKey,
    queryFn: fetchClubList(filters, perpage),
    initialData: loaderfunction,
    initialPageParam: ININTIAL_PAGE,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.page < lastPage.totalPages ? allPages.length + 1 : null;
    },
  });
  return queryOption;
}
