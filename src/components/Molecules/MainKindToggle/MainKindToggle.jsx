import { NavLink } from 'react-router-dom';

const assignActiveClassNames =
  (classNames, activeClassName) =>
  ({ isActive }) => {
    return classNames + (isActive ? ` ${activeClassName}` : '');
  };

const navLinks = [
  {
    path: '/mainClub',
    text: '북적클럽',
  },
  {
    path: '/mainBookReview',
    text: '독후감',
  },
];

function MainKindToggle() {
  const classNames =
    'text-b-1-medium flex justify-center items-center w-[30%] py-4';

  return (
    <div className="flex justify-evenly gap-4 border-b shadow-sm">
      {navLinks.map((navLink) => {
        return (
          <NavLink
            key={navLink.path}
            to={navLink.path}
            className={assignActiveClassNames(
              classNames,
              ' border-b-2 border-b-black'
            )}
          >
            <h2>{navLink.text}</h2>
          </NavLink>
        );
      })}
    </div>
  );
}

export default MainKindToggle;
