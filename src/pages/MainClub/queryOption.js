import { fetchClubList } from './fetchClubList';

const ININTIAL_PAGE = 1;
export function getClubListQueryOption(perpage, filters) {
  const queryKey = ['mainClub'];

  if (filters) {
    queryKey.push(filters);
  }

  const queryOption = {
    queryKey,
    queryFn: fetchClubList(filters, perpage),
    initialPageParam: ININTIAL_PAGE,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.page < lastPage.totalPages ? allPages.length + 1 : null;
    },
  };
  return queryOption;
}
