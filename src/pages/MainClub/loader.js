import { queryClient } from '@/client/queryClient';
import { fetchClubList } from './fetchClubList';

export const loader =
  () =>
  async ({ request }) => {
    const url = new URL(request.url);
    const filters = url.searchParams.get('filters');

    return await queryClient.ensureQueryData({
      queryKey: ['mainClub', filters],
      queryFn: fetchClubList(filters),
    });
  };
