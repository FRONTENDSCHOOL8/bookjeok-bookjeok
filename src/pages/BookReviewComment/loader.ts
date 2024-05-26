import { queryClient } from '@/client/queryClient';
import type { LoaderFunction } from 'react-router-dom';
import { BRCommentqueryOptions } from './useBookReviewCommentsQuery';
export const loader: LoaderFunction = async ({ params }) => {
  const { BookReviewId } = params;
  const queryOptions = BRCommentqueryOptions(
    10,
    `${BookReviewId ? BookReviewId : ''}`
  );
  const cachedComments = queryClient.getQueryData(queryOptions.queryKey);
  return cachedComments || (await queryClient.fetchInfiniteQuery(queryOptions));
};
