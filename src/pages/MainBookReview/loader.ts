import { queryClient } from '@/client/queryClient';
import { fetchBookReview } from './fetchBookReview';
import { bookReviewQueryOption } from './queryOptions';
import type { LoaderFunction } from 'react-router-dom';

export const loader: LoaderFunction = async () => {
  const queryOptions = bookReviewQueryOption(10, fetchBookReview);
  const cacheBookReviewData = queryClient.getQueryData(queryOptions.queryKey);
  const bookReview =
    cacheBookReviewData || (await queryClient.fetchInfiniteQuery(queryOptions));
  return bookReview;
};
