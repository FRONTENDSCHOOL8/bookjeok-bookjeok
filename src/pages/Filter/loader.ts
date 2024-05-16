import { queryClient } from '@/client/queryClient';
import { fetchFilter } from '@/pages/Filter';

export const loader = async () => {
  return await queryClient.ensureQueryData({
    queryKey: ['filter'],
    queryFn: () => fetchFilter(),
  });
};
