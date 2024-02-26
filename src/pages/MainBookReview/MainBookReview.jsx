import { MainKindToggle } from '@/components/Molecules';
import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';

function MainBookReview() {
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('독후감')}</title>
      </Helmet>
      <div>
        <MainKindToggle />
        MainBookReview
      </div>
    </>
  );
}

export default MainBookReview;
