import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';

export function ApplicationClub() {
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('모임 신청하기')}</title>
      </Helmet>
    </>
  );
}
