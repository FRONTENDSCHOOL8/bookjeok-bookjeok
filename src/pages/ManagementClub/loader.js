import pb from '@/api/pocketbase';

export const loader = async ({ params }) => {
  const socialing = await pb.collection('socialing').getOne(params.clubId, {
    expand:
      'confirmUser, answer, answer.socialing, answer.answerUser, applicant, chattingRoom',
  });
  if (!('expand' in socialing)) {
    socialing.expand = {
      answer: undefined,
      confirmUser: undefined,
      applicant: undefined,
    };
  }

  const data = { socialing };
  return data;
};
