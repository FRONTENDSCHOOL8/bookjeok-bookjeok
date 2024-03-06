import pb from '@/api/pocketbase';

export async function loader() {
  const data = await pb.collection('genres').getFullList();
  return data;
}
