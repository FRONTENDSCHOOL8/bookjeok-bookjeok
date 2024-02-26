import { NavLink, useLocation } from 'react-router-dom';

const toggleStyle = {
  className:
    'text-b-1-medium flex justify-center items-center border-b-2 w-[30%] p-4',
};
const activeStyle = 'border-b-black';

function MainKindToggle() {
  const location = useLocation();

  const isActive = (pathname) => {
    return location.pathname === pathname;
  };

  return (
    <div className="flex justify-evenly gap-4">
      <NavLink
        {...toggleStyle}
        className={`${toggleStyle.className} ${
          isActive('/mainClub') && activeStyle
        }`}
        to="/mainClub"
      >
        북적클럽
      </NavLink>
      <NavLink
        {...toggleStyle}
        className={`${toggleStyle.className} ${
          isActive('/mainBookReview') && activeStyle
        }`}
        to="/mainBookReview"
      >
        독후감
      </NavLink>
    </div>
  );
}

export default MainKindToggle;
