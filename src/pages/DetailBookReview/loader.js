import pb from '@/api/pocketbase';
import { getPbImgs } from '@/utils';

export async function loader({ params }) {
  const { bookreviewId } = params;
  const reviewInfo = await pb
    .collection('bookReview')
    .getOne(bookreviewId, { expand: 'writer, book_ISBN' });
  reviewInfo.img = getPbImgs(reviewInfo);
  return { reviewInfo };
}
