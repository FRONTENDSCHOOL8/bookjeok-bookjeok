import pb from '@/api/pocketbase';

const fetchReply = async (parentId: string) => {
  const replydata = await pb.collection('comments').getFullList({
    filter: `replyToId='${parentId}'`,
    sort: '+created',
    expand: 'author',
  });
  return replydata;
};
export default fetchReply;
