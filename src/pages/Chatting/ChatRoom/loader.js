import { queryClient } from '@/client/queryClient';
import { FetchChatRoom } from './FetchChatRoom';

export const loader =
  () =>
  async ({ params }) => {
    const { clubId } = params;
    return await queryClient.ensureQueryData({
      queryKey: ['chatRoom', clubId],
      queryFn: () => FetchChatRoom(clubId),
      refetchInterval: 1000 * 2,
      staleTime: 1000 * 10,
    });
  };
