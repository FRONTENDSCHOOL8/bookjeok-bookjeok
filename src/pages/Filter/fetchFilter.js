import pb from '@/api/pocketbase';

export const fetchFilter = () => async () => {
  const filters = await pb.collection('genres').getFullList();

  return filters;
};
