import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';

function DetailBookReview() {
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('독후감 제목이 들어가야합니다!')}</title>
      </Helmet>
      <div>DetailBookReview</div>
    </>
  );
}

export default DetailBookReview;
