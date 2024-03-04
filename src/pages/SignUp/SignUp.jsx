
import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';

function SignUp() {
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('회원가입')}</title>
      </Helmet>
      <div>SignUp</div>
    </>
  );
}

export default SignUp;
