import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { ClubList } from '@/components/Molecules';
function MyClubList() {
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('나의 모임 리스트')}</title>
      </Helmet>
      <div>
        dd
        <ClubList>g</ClubList>
      </div>
    </>
  );
}

export default MyClubList;
