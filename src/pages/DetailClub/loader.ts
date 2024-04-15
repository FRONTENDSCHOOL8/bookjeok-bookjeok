import { LoaderFunction } from 'react-router-dom';
import { fetchDetailClub } from '@/pages/DetailClub';
import { queryClient } from '@/client/queryClient';

export const loader: LoaderFunction = async ({ params }) => {
  const { clubId } = params;
  const queryData = await queryClient.ensureQueryData({
    queryKey: ['detailClub', clubId],
    queryFn: () => fetchDetailClub(clubId!),
  });

  return queryData;
};
