import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';

function CreateClub1() {
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('모임 만들기')}</title>
      </Helmet>
    </>
  );
}

export default CreateClub1;
