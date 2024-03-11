import pb from '@/api/pocketbase';

export async function loader() {
  const bookReview = await pb.collection('bookReview').getFullList({
    sort: '-created',
    expand: 'writer',
  });
  return { bookReview };
}
