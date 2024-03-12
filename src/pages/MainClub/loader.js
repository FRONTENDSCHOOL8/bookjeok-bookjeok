// import { queryClient } from '@/client/queryClient';
import { fetchClubList } from './fetchClubList';

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const filters = url.searchParams.get('filters') ?? '';

    let clubData = null;
    const cachedClubData = queryClient.getQueryData(['mainClub', filters]);
    const ININTIAL_PAGE = 1;
    const PER_PAGE = 10;
    if (cachedClubData) {
      clubData = cachedClubData;
    } else {
      clubData = await queryClient.fetchInfiniteQuery({
        queryKey: ['mainClub', filters],
        queryFn: fetchClubList(filters, PER_PAGE),
        initialPageParam: ININTIAL_PAGE,
        getNextPageParam: (lastPage, allPages) => {
          return lastPage.page < lastPage.totalPages
            ? allPages.length + 1
            : null;
        },
      });
    }
    return clubData;
  };
