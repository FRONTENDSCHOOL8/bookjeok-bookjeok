import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';

function ApplicationClub1() {
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('모임 신청하기')}</title>
      </Helmet>
      <div>ApplicationClub1</div>
    </>
  );
}

export default ApplicationClub1;
