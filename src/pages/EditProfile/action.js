import pb from '@/api/pocketbase';
import { redirect } from 'react-router-dom';
export const action = async ({ request, params }) => {
  console.log(params);
  const data = await request.formData();

  await pb.collection('users').update(params.userId, {
    nickname: data.get('nickname'),
    password: data.get('password'),
    passwordConfirm: data.get('passwordConfirm'),
    oldPassword: data.get('oldPassword'),
    img: data.get('img'),
  });
  return redirect(`/myPage`);
};
