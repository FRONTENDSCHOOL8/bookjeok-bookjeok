import pb from '@/api/pocketbase';
import { getPbImgs } from '@/utils';

export const fetchClubList = (filters) => async () => {
  let filterQuery = null;
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
  const clubs = await pb.collection('socialing').getFullList({
    fields:
      'id,title,dateTime,isOffline,collectionId,location,limitPerson,confirmUser,img,expand.genre.title',
    expand: 'genre',
    filter: filterQuery,
    sort: '-created',
  });
  const clubItems = clubs.map((club) => {
    const photoURL = getPbImgs(club);
    club.photo = photoURL;
    return club;
  });
  return clubItems;
};
