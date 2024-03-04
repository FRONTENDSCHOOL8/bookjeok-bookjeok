import { MainKindToggle } from '@/components/Molecules';
import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';

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

export async function loader() {
  return '';
}
export default MainBookReview;
