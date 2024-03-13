import { Svg } from '@/components/Atoms';
import useUserInfoStore from '@/store/useUserInfoStore';
import { bool, string } from 'prop-types';
import { useLocation } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function GNB({ createClub, createBookReview, className }) {
  const { pathname } = useLocation();
  let centerIconPath;
  if (createClub) {
    centerIconPath = '/createClub';
  }
  if (createBookReview) {
    centerIconPath = '/createBookReview';
  }

  const { userInfo } = useUserInfoStore();
  const menu = [
    { id: 'logo', to: '/mainClub', title: '홈' },
    { id: 'calendar', to: '/myClubList', title: '나의 모임 리스트' },
    { id: 'plus', to: centerIconPath, title: '생성하기' },
    { id: 'chat', to: `/chatRoomList/${userInfo?.id}`, title: '채팅리스트' },
    { id: 'user', to: '/myPage', title: '마이페이지' },
  ];
  if (!userInfo) {
    menu[0].to = '/';
  }

  const assignActiveClassNames =
    (classNames, activeClassName, index) =>
    ({ isActive }) => {
      if (index === 0) {
        if (pathname === '/mainClub' || pathname === '/mainBookReview') {
          isActive = true;
        }
      }
      return classNames + (isActive ? ` ${activeClassName}` : '');
    };
  const classNames = 'flex flex-col p-1 items-center';
  const activeClaseNames = 'border-b-4 border-bjyellow-500';
  return (
    <ul
      className={`bottom-[-4px] flex w-full max-w-[430px] justify-evenly border-t bg-white py-4 shadow-inner ${className}`}
    >
      {menu.map(({ id, to, title }, index) => {
        return (
          <li key={id}>
            <NavLink
              to={to}
              className={assignActiveClassNames(
                classNames,
                activeClaseNames,
                index
              )}
              aria-label={title}
            >
              <Svg size={32} id={id} />
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}

GNB.propTypes = {
  createClub: bool,
  createBookReview: bool,
  className: string,
};

export default GNB;
