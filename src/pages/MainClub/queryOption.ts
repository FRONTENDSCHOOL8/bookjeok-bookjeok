import { fetchClubList } from '@/pages/MainClub';
import { infiniteQueryOptions } from '@tanstack/react-query';

const ININTIAL_PAGE = 1;
export function getClubListQueryOption(
  filters: string | null,
  sort: string | null,
  perpage: number,
  loaderFunction: any
) {
  const queryKey = ['mainClub'];

  if (filters) {
    queryKey.push(filters);
  }
  if (sort) {
    queryKey.push(sort);
  }

  const queryOption = infiniteQueryOptions({
    queryKey,
    queryFn: fetchClubList(filters, sort, perpage),
    initialData: loaderFunction,
    initialPageParam: ININTIAL_PAGE,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.page < lastPage.totalPages ? allPages.length + 1 : null;
    },
  });
  return queryOption;
}
