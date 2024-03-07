import { Svg } from '@/components/Atoms';
import { bool, string } from 'prop-types';
import { Link } from 'react-router-dom';

function GNB({ createClub, createBookReview, className }) {
  let centerIconPath;
  if (createClub) {
    centerIconPath = '/createClub';
  }
  if (createBookReview) {
    centerIconPath = '/createBookReview';
  }

  return (
    <ul
      className={`bottom-[-4px] flex w-full max-w-[430px] justify-evenly border-t bg-white py-4 ${className}`}
    >
      <li>
        <Link to="/">
          <Svg width={32} height={32} id="logo" />
        </Link>
      </li>
      <li>
        <Link to="/myClubList">
          <Svg width={32} height={32} id="calendar" />
        </Link>
      </li>
      <li>
        <Link to={centerIconPath}>
          <Svg width={32} height={32} id="plus" />
        </Link>
      </li>
      <li>
        <Link to="/chatRoomList">
          <Svg width={32} height={32} id="chat" />
        </Link>
      </li>
      <li>
        <Link to="/myPage">
          <Svg width={32} height={32} id="user" />
        </Link>
      </li>
    </ul>
  );
}

GNB.propTypes = {
  createClub: bool,
  createBookReview: bool,
  className: string,
};

export default GNB;
