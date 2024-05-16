import { queryClient } from '@/client/queryClient';
import { getClubListQueryOption } from './queryOption';
import { fetchClubList } from './fetchClubList';
import type { LoaderFunction } from 'react-router-dom';
import { fetchUserInfo } from './fetchUserInfo';

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const filters = url.searchParams.get('filters') ?? '';

  const queryOptions = getClubListQueryOption(filters, 10, fetchClubList);

  let clubData = null;

  const cachedClubData = queryClient.getQueryData(queryOptions.queryKey);

  if (cachedClubData) {
    clubData = cachedClubData;
  } else {
    clubData = await queryClient.fetchInfiniteQuery(queryOptions);
  }

  const userInfo = await fetchUserInfo();
  const data = { userInfo, clubData };
  return data;
};
