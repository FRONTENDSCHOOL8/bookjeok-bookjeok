import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';

function Welcome() {
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('환영합니다')}</title>
      </Helmet>
      <div>Welcome</div>
    </>
  );
}

export default Welcome;
