import { queryClient } from '@/client/queryClient';
import { FetchChattingRoomList } from './FetchChattingRoomList';

export const loader =
  () =>
  async ({ params }) => {
    const { userId } = params;
    return await queryClient.ensureQueryData({
      queryKey: ['chattingRoomList', userId],
      queryFn: () => FetchChattingRoomList(userId),
      refetchInterval: 1000,
    });
  };
