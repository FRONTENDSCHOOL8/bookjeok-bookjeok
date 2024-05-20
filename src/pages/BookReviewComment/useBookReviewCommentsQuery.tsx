import { useInfiniteQuery, infiniteQueryOptions } from '@tanstack/react-query';
import pb from '@/api/pocketbase';
const fetchBookReviewComments =
  (perPage: number, bookReviewId: string) =>
  async (pageInfo: { pageParam: number | undefined }) => {
    const commentsData = await pb
      .collection('comments')
      .getList(pageInfo.pageParam, perPage, {
        filter: `bookReviewId="${bookReviewId}"`,
        sort: '-created',
        expand: 'writer',
      });
    return commentsData;
  };

const BRCommentqueryOptions = (perPage: number, bookReviewId: string) => {
  const queryOption = infiniteQueryOptions({
    queryKey: ['BRcomments'],
    queryFn: fetchBookReviewComments(perPage, bookReviewId),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.page < lastPage.totalPages ? allPages.length + 1 : null;
    },
  });
  return queryOption;
};

const useBookReviewCommentsQuery = (bookReviewId: string) => {
  const {
    data: commentsData,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    ...BRCommentqueryOptions(10, bookReviewId),
  });
  return { commentsData, fetchNextPage, hasNextPage };
};

export default useBookReviewCommentsQuery;
