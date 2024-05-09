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

export const fetchSearchBookReview = async (keyword: string | object) => {
  const bookReviewData = await pb
    .collection('bookReview')
    .getFullList<
      BookReviewResponse<Texpand>
    >({ filter: `bookTitle ~ "${keyword}"`, sort: '-created', expand: 'writer' });
  return bookReviewData;
};
