import { useQuery } from '@tanstack/react-query';
import { useLoaderData } from 'react-router-dom';
import { fetchFilter } from '@/pages/Filter';

const useGetFilter = () => {
  const loadedfilterList = useLoaderData();

  const { data: cachedFilterList } = useQuery({
    queryKey: ['filter'],
    queryFn: fetchFilter(),
    initialData: loadedfilterList,
  });

  return cachedFilterList;
};

export default useGetFilter;
