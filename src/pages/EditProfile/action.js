import pb from '@/api/pocketbase';
import { redirect } from 'react-router-dom';

export const action = async ({ request, params }) => {
  console.log(params);
  console.log(request);
  const data = await request.formData();

  const update = {
    nickname: data.get('nickname'),
    password: data.get('password'),
    passwordConfirm: data.get('passwordConfirm'),
    oldPassword: data.get('oldPassword'),
    img: data.get('img'),
  };

  try {
    await pb
      .collection('users')
      .update(params.userId, update)
      .then((res) => {
        console.log(res);
      });
    for (let d of data.values()) {
      console.log(d);
    }
    return redirect(`/editProfile/${params.userId}`);
  } catch (error) {
    return error;
  }
};
