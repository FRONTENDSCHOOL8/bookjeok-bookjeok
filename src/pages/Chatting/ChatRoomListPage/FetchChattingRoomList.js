import pb from '@/api/pocketbase';

export const FetchChattingRoomList = async (id) => {
  const data = await pb.collection('chattingRoom').getFullList({
    filter: `users ?~ "${id}"`,
    expand: 'socialing, users, message',
    sort: '-updated',
  });
  return data;
};
