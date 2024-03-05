import { DobbleButtonModal } from '@/components/Molecules';
import useUserInfoStore from '@/store/useUserInfoStore';
import { node, string } from 'prop-types';

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
    return (
      <DobbleButtonModal
        open
        svgId="logo"
        primaryButtonPath={redirectPath}
        primaryButtonText="로그인 하러가기"
        title="회원이 아니신가요?"
      >
        북적북적을 이용하려면 로그인이 필요합니다.
      </DobbleButtonModal>
    );
  }
  return children;
}

export default ProtectRoute;

ProtectRoute.propTypes = {
  redirectPath: string,
  children: node,
};
