import { NavLink } from 'react-router-dom';

const navLinks = [
  {
    path: '/main/club',
    text: '북적클럽',
  },
  {
    path: '/main/bookReview',
    text: '독후감',
  },
];

const MainKindToggle = () => {
  const classNames =
    'text-b-1-medium flex justify-center items-center w-[30%] py-4';
  const activeClassName = ' border-b-2 border-b-black';

  return (
    <div className="flex justify-evenly gap-4 border-b shadow-sm">
      {navLinks.map((navLink) => {
        return (
          <NavLink
            key={navLink.path}
            to={navLink.path}
            className={({ isActive }) =>
              classNames + (isActive ? ` ${activeClassName}` : '')
            }
          >
            <h2>{navLink.text}</h2>
          </NavLink>
        );
      })}
    </div>
  );
};

export default MainKindToggle;
