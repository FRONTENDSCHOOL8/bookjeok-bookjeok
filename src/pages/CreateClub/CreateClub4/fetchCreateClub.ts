import pb from '@/api/pocketbase';
import {
  ChattingRoomRecord,
  Collections,
  SocialingRecord,
  UsersRecord,
  UsersResponse,
} from '@/types/pocketbase-types';

export const createSocialing = async (clubInfo: SocialingRecord) => {
  const data = await pb.collection(Collections.Socialing).create(clubInfo);
  return data;
};

export const readUser = async (userId: string | undefined) => {
  if (userId) {
    const user = await pb
      .collection(Collections.Users)
      .getOne<UsersResponse>(userId);
    return user;
  } else {
    console.error('로그인된 사용자가 없습니다.');
    return;
  }
};

export const updateUser = async (
  userId: string | undefined,
  updateInfo: UsersRecord
) => {
  if (userId) {
    const updateUser = await pb
      .collection(Collections.Users)
      .update(userId, updateInfo);
    return updateUser;
  } else {
    console.error('로그인된 사용자가 없습니다.');
    return;
  }
};

export const createSociling = async (chattingRoomData: ChattingRoomRecord) => {
  const chattingRoom = await pb
    .collection(Collections.ChattingRoom)
    .create(chattingRoomData);
  return chattingRoom;
};

export const updateSocialing = async (
  clubId: string,
  updateClubInfo: SocialingRecord
) => {
  const updateSocialing = await pb
    .collection(Collections.Socialing)
    .update(clubId, updateClubInfo);
  return updateSocialing;
};
