import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';

function MyClubList() {
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('나의 모임 리스트')}</title>
      </Helmet>
      <div>MyClubList</div>
    </>
  );
}

export default MyClubList;
