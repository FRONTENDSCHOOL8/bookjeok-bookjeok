import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { TextForm, NomalTitle, MainButton } from '@/components/Atoms';

function Login() {
  return (
    <div className="box-border flex h-screen  flex-grow flex-col justify-center px-4 ">
      <Helmet>
        <title>{getDocumentTitle('로그인')}</title>
      </Helmet>
      <NomalTitle backButton>로그인</NomalTitle>
      <div className="flex flex-grow flex-col ">
        <TextForm
          type="email"
          placeholder="email@email.com"
          description="description"
        >
          이메일
        </TextForm>
        <TextForm type="password" placeholder="" description="description">
          비밀번호
        </TextForm>
      </div>
      <MainButton className="my-16" type="button">
        로그인
      </MainButton>
    </div>
  );
}

export default Login;
