import pb from '@/api/pocketbase';
import {
  GenresResponse,
  SocialingResponse,
  UsersResponse,
} from '@/types/pocketbase-types';
import { getPbImgs } from '@/utils';

export type Texpand = {
  genre: GenresResponse;
  users: UsersResponse;
};

export const fetchClubList =
  (filters: string | null, sort: string | null, perPage: number) =>
  async (pageInfo: any) => {
    let filterQuery: string | null = null;

    if (filters) {
      if (filters.includes(',')) {
        filterQuery = filters
          .split(',')
          .map((filter) => `genre.title~"${filter}"`)
          .join('||');
      } else {
        filterQuery = `genre.title~"${filters}"`;
      }
    }

    let sortType = '-created';
    if (sort) {
      sortType = sort;
    }
    const clubs = await pb
      .collection('socialing')
      .getList<SocialingResponse<Texpand>>(pageInfo.pageParam, perPage, {
        fields:
          'id,title,dateTime,isOffline,collectionId,location,limitPerson,confirmUser,img,expand.genre.title,like, expand.like',
        expand: 'genre,like',
        filter: filterQuery!,
        sort: sortType,
      });

    const clubItems = clubs.items.map((club) => {
      const photoURL = getPbImgs(club);
      club.photo = photoURL;
      return club;
    });
    clubs.items = clubItems;

    return clubs;
  };
