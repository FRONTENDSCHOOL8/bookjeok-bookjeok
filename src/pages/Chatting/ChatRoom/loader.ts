import { queryClient } from '@/client/queryClient';
import { FetchChatRoom } from '@/pages/Chatting/ChatRoom';
import { LoaderFunction } from 'react-router-dom';

export const loader: LoaderFunction = async ({ params }) => {
  const { chattingRoomId } = params;
  return await queryClient.ensureQueryData({
    queryKey: ['chatRoom', chattingRoomId],
    queryFn: () => FetchChatRoom(chattingRoomId!),
    // refetchInterval: 1000 * 2,
    staleTime: 1000 * 10,
  });
};
