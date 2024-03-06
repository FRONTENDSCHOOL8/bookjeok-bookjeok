import pb from '@/api/pocketbase';
import { getPbImgs } from '@/utils';

export async function loader({ params }) {
  const { clubId } = params;
  const club = await pb
    .collection('socialing')
    .getOne(clubId, { expand: ' createUser' });
  const profile = await pb.collection('users').getOne(club.createUser);
  if (profile.img) {
    const profilePhoto = getPbImgs(profile);
    return { club, profilePhoto };
  }
  return { club };
}
