import pb from '@/api/pocketbase';

export async function loader() {
  const filters = await pb.collection('genres').getFullList();
  return filters;
}
