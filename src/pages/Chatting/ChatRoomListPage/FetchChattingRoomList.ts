import pb from '@/api/pocketbase';
import {
  ChattingRoomResponse,
  Collections,
  MessageResponse,
  SocialingResponse,
  UsersResponse,
} from '@/types/pocketbase-types';

export type Texpand = {
  socialing: SocialingResponse;
  users: UsersResponse[];
  message: MessageResponse[];
};

export const FetchChattingRoomList = async (id: string) => {
  const data = await pb
    .collection(Collections.ChattingRoom)
    .getFullList<ChattingRoomResponse<Texpand>>({
      filter: `users ?~ "${id}"`,
      expand: 'socialing, users, message',
      sort: '-updated',
    });
  return data;
};
