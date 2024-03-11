import pb from '@/api/pocketbase';

export const FetchChatRoom = async (chattingRoomId) => {
  const data = await pb.collection('chattingRoom').getOne(chattingRoomId, {
    expand: 'socialing, users, message, message.sendUser',
  });
  return data;
};
