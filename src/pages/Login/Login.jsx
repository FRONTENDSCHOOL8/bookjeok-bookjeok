import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';

function Login() {
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('로그인')}</title>
      </Helmet>
      <div>Login</div>
    </>
  );
}

export default Login;
