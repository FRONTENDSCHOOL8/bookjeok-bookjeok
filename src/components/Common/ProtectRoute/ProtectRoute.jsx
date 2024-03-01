import { Navigate } from 'react-router-dom';
import { string, node } from 'prop-types';
import useUserInfoStore from '@/store/useUserInfoStore';

function isEmpty(obj) {
  for (const key in obj) {
    return false;
  }
  return true;
}
function ProtectRoute({ redirectPath = '/', children }) {
  const { userInfo } = useUserInfoStore();

  // 로그인 없이 편하게 사용하려면 아래의 세줄을 주석처리 할 것, 다만 commit시 오류나 나므로 주석을 풀고 커밋
  if (isEmpty(userInfo)) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
}

export default ProtectRoute;

ProtectRoute.propTypes = {
  redirectPath: string,
  children: node,
};
