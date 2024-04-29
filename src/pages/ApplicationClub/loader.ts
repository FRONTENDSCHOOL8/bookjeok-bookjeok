import pb from '@/api/pocketbase';
import { getPbImgs } from '@/utils';
import type { LoaderFunction } from 'react-router-dom';
import { SocialingResponse, UsersResponse } from '@/types/pocketbase-types';

interface TExpand {
  createUser: UsersResponse;
}

export interface LoaderType {
  club: SocialingResponse;
  profilePhoto?: string;
}

export const loader: LoaderFunction = async ({ params }) => {
  const { clubId } = params;
  if (typeof clubId === 'string') {
    const club = await pb
      .collection('socialing')
      .getOne<SocialingResponse<TExpand>>(clubId, { expand: ' createUser' });
    const profile = await pb.collection('users').getOne(club.createUser);
    if (profile.img) {
      const profilePhoto = getPbImgs(profile);
      return { club, profilePhoto };
    }
    return { club };
  }
};
