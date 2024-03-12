import { getClubListQueryOption } from './queryOption';

export const loader =
  (queryClient) =>
  async ({ request }) => {
    const url = new URL(request.url);
    const filters = url.searchParams.get('filters') ?? '';

    const queryOptions = getClubListQueryOption(10, filters);

    let clubData = null;

    const cachedClubData = queryClient.getQueryData(queryOptions);

    if (cachedClubData) {
      clubData = cachedClubData;
    } else {
      clubData = await queryClient.fetchInfiniteQuery(queryOptions);
    }
    return clubData;
  };
