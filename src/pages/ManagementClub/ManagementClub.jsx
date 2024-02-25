import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';

function ManagementClub() {
  return (
    <>
      <Helmet>
        <title>
          {getDocumentTitle('이곳에 모임 이름을 받아서 넣어줘야하지 않을까요?')}
        </title>
      </Helmet>
      <div>ManagmentClub</div>
    </>
  );
}

export default ManagementClub;
