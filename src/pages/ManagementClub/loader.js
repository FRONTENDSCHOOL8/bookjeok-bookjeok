import pb from '@/api/pocketbase';

export const loader = async ({ params }) => {
  // const answer = await pb.collection('socialingQueryAnswer').getFullList({
  //   filter: `socialing ="${params.clubId}"`,
  //   expand: 'socialing, answerUser',
  // });
  const socialing = await pb.collection('socialing').getOne(params.clubId, {
    expand:
      'confirmUser, answer, answer.socialing, answer.answerUser, applicant',
  });
  console.log(socialing);
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
