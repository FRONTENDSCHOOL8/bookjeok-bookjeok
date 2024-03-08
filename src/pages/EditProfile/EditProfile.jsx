import { Helmet } from 'react-helmet-async';
import { getDocumentTitle } from '@/utils';
export function EditProfile() {
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('프로필 수정')}</title>
      </Helmet>
      <div>프로필 수정</div>
    </>
  );
}
