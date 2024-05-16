import { DobbleButtonModal } from '@/components/Molecules';
import useUserInfoStore from '@/store/useUserInfoStore';
import { UsersResponse } from '@/types/pocketbase-types';

type TisEmpty = (obj: UsersResponse) => boolean;

interface TprotectRoute {
  redirectPath?: string;
  children?: React.ReactNode;
}
const isEmpty: TisEmpty = (obj) => {
  for (const key in obj) {
    return false;
  }
  return true;
};

const ProtectRoute = ({ redirectPath = '/', children }: TprotectRoute) => {
  const { userInfo } = useUserInfoStore();

  if (isEmpty(userInfo!)) {
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
};

export default ProtectRoute;
