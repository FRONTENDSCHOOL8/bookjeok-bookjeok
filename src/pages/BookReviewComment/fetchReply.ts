import pb from '@/api/pocketbase';
import { Texpand } from './useBookReviewCommentsQuery';
import { CommentsResponse } from '@/types/pocketbase-types';

const fetchReply = async (parentId: string) => {
  const replydata = await pb
    .collection('comments')
    .getFullList<CommentsResponse<Texpand>>({
      filter: `replyToId='${parentId}'`,
      sort: '+created',
      expand: 'author',
    });
  return replydata;
};
export default fetchReply;
