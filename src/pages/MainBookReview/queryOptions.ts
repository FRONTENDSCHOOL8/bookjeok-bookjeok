import { fetchBookReview } from '@/pages/MainBookReview';
import { infiniteQueryOptions } from '@tanstack/react-query';

export const bookReviewQueryOption = (perPage: number, loaderFn: any) => {
  const queryOption = infiniteQueryOptions({
    queryKey: ['bookReviewItem'],
    queryFn: fetchBookReview(perPage),
    initialData: loaderFn,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      console.log('lastPage', lastPage, 'allPages', allPages);
      return lastPage.page < lastPage.totalPages ? allPages.length + 1 : null;
    },
  });
  return queryOption;
};
