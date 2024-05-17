import { Link } from 'react-router-dom';
import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { NomalTitle } from '@/components/Atoms';

const style = {
  li: 'my-auto border-b-2 border-solid pb-4',
};

export function EditProfileMenu() {
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('프로필 수정')}</title>
      </Helmet>
      <div className="relative flex min-h-svh w-full flex-col ">
        <NomalTitle backLink path="myPage">
          프로필 수정
        </NomalTitle>
        <ul className="flex flex-col justify-between gap-4 pt-4">
          <li className={`${style['li']}`}>
            <Link to="/editProfileInfo">회원정보 수정하기</Link>
          </li>
          <li className={`${style['li']}`}>
            <Link to="/modifyPassword">비밀번호 변경하기</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
