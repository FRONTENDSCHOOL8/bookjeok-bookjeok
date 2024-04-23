import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { BasicInfo, DetailInfo } from './index.ts';
import useSignUpStore from '@/store/useSignUpStore.ts';

export function SignUp() {
  const currentPage = useSignUpStore((state) => state.currentPage);
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('회원가입')}</title>
      </Helmet>
      {currentPage === 'basicInfo' ? <BasicInfo /> : <DetailInfo />}
    </>
  );
}
