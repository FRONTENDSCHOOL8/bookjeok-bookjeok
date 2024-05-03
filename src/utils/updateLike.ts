import pb from '@/api/pocketbase';

const updateLike = async (
  collection: 'socialing' | 'users',
  collectionId: string,
  context?: (string | undefined)[]
) => {
  const updateData = await pb
    .collection(collection)
    .update(collectionId, { like: context });
  return updateData;
};

export default updateLike;
