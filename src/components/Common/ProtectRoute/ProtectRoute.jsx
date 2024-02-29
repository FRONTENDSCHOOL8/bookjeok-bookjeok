import { Navigate } from 'react-router-dom';
import { string, node } from 'prop-types';
import useUserInfoStore from '@/store/useUserInfoStore';

function ProtectRoute({ redirectPath = '/', children }) {
  const { userInfo } = useUserInfoStore();
  console.log(userInfo);

  if (!userInfo) {
    return <Navigate to={redirectPath} replace />;
  }
  return children;
}

export default ProtectRoute;

ProtectRoute.propTypes = {
  redirectPath: string,
  children: node,
};
