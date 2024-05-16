import pb from '@/api/pocketbase';
import {
  ChattingRoomResponse,
  Collections,
  MessageResponse,
  SocialingResponse,
  UsersResponse,
} from '@/types/pocketbase-types';

export type Texpand2 = {
  sendUser: UsersResponse;
};

export type Texpand = {
  socialing: SocialingResponse;
  users: UsersResponse[];
  message: MessageResponse<Texpand2>[];
};

export const FetchChatRoom = async (chattingRoomId: string) => {
  const data = await pb
    .collection(Collections.ChattingRoom)
    .getOne<ChattingRoomResponse<Texpand>>(chattingRoomId, {
      expand: 'socialing, users, message, message.sendUser',
    });
  return data;
};
