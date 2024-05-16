import pb from '@/api/pocketbase';
import useUserInfoStore from '@/store/useUserInfoStore';
import {
  Collections,
  UsersResponse,
  SocialingResponse,
} from '@/types/pocketbase-types';

export type Texpand2 = {
  like: SocialingResponse;
};
export const fetchUserInfo = async () => {
  const { userInfo } = useUserInfoStore.getState();

  if (userInfo) {
    const loginUserData = await pb
      .collection(Collections.Users)
      .getOne<UsersResponse<Texpand2>>(userInfo!.id, { expand: 'like' });
    return loginUserData;
  }
};
