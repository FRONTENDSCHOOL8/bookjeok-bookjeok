import pb from '@/api/pocketbase';
import { getPbImgs } from '@/utils';
import type { LoaderFunction } from 'react-router-dom';
import { BookReviewResponse, UsersResponse } from '@/types/pocketbase-types';
type Texpand = {
  writer: UsersResponse;
};

export const loader: LoaderFunction = async ({ params }) => {
  const { bookreviewId } = params;
  if (bookreviewId) {
    const reviewInfo = await pb
      .collection('bookReview')
      .getOne<BookReviewResponse<Texpand>>(bookreviewId, {
        expand: 'writer',
      });
    reviewInfo.img = getPbImgs(reviewInfo);
    return reviewInfo;
  }
};
