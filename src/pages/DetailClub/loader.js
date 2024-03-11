import pb from '@/api/pocketbase';
import { getPbImgs } from '@/utils';

export async function loader({ params }) {
  const { clubId } = params;
  const club = await pb
    .collection('socialing')
    .getOne(clubId, { expand: 'genre, createUser, applicant' });
  club.photo = getPbImgs(club);
  return club;
}
