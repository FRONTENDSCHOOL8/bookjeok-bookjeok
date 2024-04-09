import pb from '@/api/pocketbase';
import { GenresResponse } from '@/types/pocketbase-types';

export const fetchFilter = () => async () => {
  const filters = await pb.collection('genres').getFullList<GenresResponse>();

  return filters;
};
