import { queryClient } from '@/client/queryClient';
import { FetchChattingRoomList } from '@/pages/Chatting/ChatRoomListPage';
import { LoaderFunction } from 'react-router-dom';

export const loader: LoaderFunction = async ({ params }) => {
  const { userId } = params;

  return await queryClient.ensureQueryData({
    queryKey: ['chattingRoomList', userId],
    queryFn: () => FetchChattingRoomList(userId!),
  });
};
