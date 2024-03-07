import pb from '@/api/pocketbase';

export async function loader() {
  const data = await pb
    .collection('chattingRoom')
    .getFullList({ expand: 'user', filter: '' });
  return data;
}
