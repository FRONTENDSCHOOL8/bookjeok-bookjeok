import pb from '@/api/pocketbase';
import { BookReviewResponse, UsersResponse } from '@/types/pocketbase-types';

export interface Texpand {
  writer: UsersResponse;
}

export const fetchBookReview = (perPage: number) => async (pageInfo: any) => {
  const bookReviewData = await pb
    .collection('bookReview')
    .getList<BookReviewResponse<Texpand>>(pageInfo.pageParam, perPage, {
      sort: '-created',
      expand: 'writer',
    });
  return bookReviewData;
};

export const fetchAllBookReview = async () => {
  const bookReviewData = await pb
    .collection('bookReview')
    .getFullList<
      BookReviewResponse<Texpand>
    >({ sort: '-created', expand: 'writer' });
  console.log('여기예요', bookReviewData);
  return bookReviewData;
};
