import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';

function CreateBookReview() {
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('독후감 쓰기')}</title>
      </Helmet>
      <div>CreateBookReview</div>
    </>
  );
}

export default CreateBookReview;
