import pb from '@/api/pocketbase';
import { BookReviewResponse, UsersResponse } from '@/types/pocketbase-types';
export interface Texpand {
  writer: UsersResponse;
}

export async function loader() {
  const bookReview = await pb
    .collection('bookReview')
    .getFullList<BookReviewResponse<Texpand>>({
      sort: '-created',
      expand: 'writer',
    });
  return { bookReview };
}
