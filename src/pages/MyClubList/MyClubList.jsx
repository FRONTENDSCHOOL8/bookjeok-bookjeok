import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { ClubList } from '@/components/Molecules';
import { NomalTitle, ThinTextForm } from '@/components/Atoms';
/*
1. socialing db에서 applicant가 사용자인 경우, 
  creator가 나인 경우를 분리하여 렌더링
2. 3개이상인 경우 더보기 버튼 다음 

*/

function MyClubList() {
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('나의 모임 리스트')}</title>
      </Helmet>
      <div>
        <NomalTitle backLink={true}>모임 리스트</NomalTitle>
        <ThinTextForm backLink={true} type="search" placeholder="search" />
        <ul>
          <p>참여중인 모임</p>
          <ClubList src=""></ClubList>
          <button>더 보기</button>
        </ul>
        <ul>
          <p>내가 만든 모임</p>
          <ClubList src=""></ClubList>
          <button>더 보기</button>
        </ul>
      </div>
    </>
  );
}

export default MyClubList;
