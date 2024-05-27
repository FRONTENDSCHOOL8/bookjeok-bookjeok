import { Svg } from '@/components/Atoms';
import useUserInfoStore from '@/store/useUserInfoStore';
import { memo, useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

interface Tgnb {
  createClub?: boolean;
  createBookReview?: boolean;
  className: string;
}

interface TLinkButton {
  id: string;
  to: string;
  title: string;
}
interface THomeLink {
  isActive: boolean;
  userInfo: any;
}

const assignActiveClassNames =
  (classNames: string, activeClassName: string) =>
  ({ isActive }: { isActive: boolean }) => {
    return classNames + (isActive ? ` ${activeClassName}` : '');
  };

const classNames = 'flex flex-col p-1 items-center';
const activeClaseNames = 'border-b-4 border-bjyellow-500';

const GNB = ({ createClub, createBookReview, className }: Tgnb) => {
  const { pathname } = useLocation();
  const { userInfo } = useUserInfoStore();
  const isIncludeMain = () => pathname.startsWith('/main');

  let centerIconPath: string;
  if (createClub) {
    centerIconPath = '/createClub';
  }
  if (createBookReview) {
    centerIconPath = '/createBookReview';
  }

  const menu = useMemo(
    () => [
      { id: 'calendar', to: '/myClubList', title: '나의 모임 리스트' },
      { id: 'plus', to: centerIconPath, title: '생성하기' },
      { id: 'chat', to: `/chatRoomList/${userInfo?.id}`, title: '채팅리스트' },
      { id: 'user', to: '/myPage', title: '마이페이지' },
    ],
    []
  );

  return (
    <ul
      className={`bottom-[-4px] flex w-full max-w-[430px] justify-evenly border-t bg-white py-4 shadow-inner ${className}`}
    >
      <HomeLink isActive={isIncludeMain()} userInfo={userInfo} />
      {menu.map(({ id, to, title }) => {
        return <LinkButton key={id} id={id} to={to} title={title} />;
      })}
    </ul>
  );
};

export default memo(GNB);

const HomeLink = ({ isActive, userInfo }: THomeLink) => {
  const assignActiveClassNames2 = (
    classNames: string,
    activeClassName: string,
    isActive: boolean
  ) => {
    return classNames + (isActive ? ` ${activeClassName}` : '');
  };
  return (
    <li>
      <NavLink
        id="GNB"
        to={userInfo ? '/main/club' : '/'}
        className={assignActiveClassNames2(
          classNames,
          activeClaseNames,
          isActive
        )}
        aria-label={'홈'}
      >
        <Svg size={32} id={'logo'} />
      </NavLink>
    </li>
  );
};

const LinkButton = ({ id, to, title }: TLinkButton) => {
  return (
    <li>
      <NavLink
        to={to}
        className={assignActiveClassNames(classNames, activeClaseNames)}
        aria-label={title}
      >
        <Svg size={32} id={id} />
      </NavLink>
    </li>
  );
};
