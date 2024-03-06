import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';

export function SignUp() {
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('회원가입')}</title>
      </Helmet>
      <div>SignUp</div>
    </>
  );
}
