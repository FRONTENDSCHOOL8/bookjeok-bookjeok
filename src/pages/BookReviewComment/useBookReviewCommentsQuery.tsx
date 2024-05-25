import pb from '@/api/pocketbase';
import { CommentsResponse, UsersResponse } from '@/types/pocketbase-types';
import { useInfiniteQuery, infiniteQueryOptions } from '@tanstack/react-query';
export interface Texpand {
  author: UsersResponse;
}

export const fetchBookReviewComments =
  (perPage: number, bookReviewId: string) =>
  async (pageInfo: { pageParam: number | undefined }) => {
    const commentsData = await pb
      .collection('comments')
      .getList<CommentsResponse<Texpand>>(pageInfo.pageParam, perPage, {
        filter: `bookReviewId="${bookReviewId}" && replyToId=""`,
        sort: '-created',
        expand: 'author',
      });
    return commentsData;
  };

export const BRCommentqueryOptions = (perPage: number, bookReviewId: string) => {
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
