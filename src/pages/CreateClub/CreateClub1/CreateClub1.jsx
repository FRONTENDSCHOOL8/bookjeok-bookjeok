import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';

function CreateClub1() {
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('모임 생성하기')}</title>
      </Helmet>
      <div>CreateClub1</div>
    </>
  );
}

export default CreateClub1;
