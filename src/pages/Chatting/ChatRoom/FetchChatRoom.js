import pb from '@/api/pocketbase';

export const FetchChatRoom = async (chattingRoomId) => {
  const data = await pb.collection('message').getFullList({
    filter: `chattingRoom = "${chattingRoomId}"`,
    sort: '-created',
    expand: '',
  });
  return data;
};
