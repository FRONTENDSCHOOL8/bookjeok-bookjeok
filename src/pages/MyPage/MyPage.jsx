import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';

function MyPage() {
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('마이페이지')}</title>
      </Helmet>
      <div>MyPage</div>
    </>
  );
}

export default MyPage;
