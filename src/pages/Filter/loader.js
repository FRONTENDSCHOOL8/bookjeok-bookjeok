import { queryClient } from '@/client/queryClient';
import { fetchFilter } from './fetchFilter';

export const loader = () => async () => {
  return await queryClient.ensureQueryData({
    queryKey: ['filter'],
    queryFn: fetchFilter(),
  });
};
