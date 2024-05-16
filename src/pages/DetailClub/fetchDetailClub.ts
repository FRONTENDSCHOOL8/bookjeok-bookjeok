import pb from '@/api/pocketbase';
import {
  Collections,
  GenresResponse,
  SocialingResponse,
  UsersResponse,
} from '@/types/pocketbase-types';
import { getPbImgs } from '@/utils';

export type Texpand = {
  genre: GenresResponse;
  createUser: UsersResponse;
  applicant: UsersResponse;
};

export const fetchDetailClub = async (clubId: string) => {
  const club = await pb
    .collection(Collections.Socialing)
    .getOne<SocialingResponse<Texpand>>(clubId, {
      expand: 'genre, createUser, applicant',
    });
  club.photo = getPbImgs(club);
  return club;
};
