import { useQuery } from '@tanstack/react-query';
import { useLoaderData } from '@/hooks';
import { fetchFilter } from '@/pages/Filter';
import { GenresResponse } from '@/types/pocketbase-types';

const useGetFilter = () => {
  const loadedfilterList = useLoaderData<GenresResponse[]>();

  const { data: cachedFilterList } = useQuery({
    queryKey: ['filter'],
    queryFn: () => fetchFilter(),
    initialData: loadedfilterList,
  });

  return cachedFilterList;
};

export default useGetFilter;
