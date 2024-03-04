import { Svg } from '@/components/Atoms';
import { Link } from 'react-router-dom';
import { bool } from 'prop-types';

function GNB({ createClub, createBookReview }) {
  let centerIconPath;
  if (createClub) {
    centerIconPath = '/createClub';
  }
  if (createBookReview) {
    centerIconPath = '/createBookReview';
  }

  return (
    <ul className="sticky bottom-0 left-0 flex w-full justify-evenly border-t bg-white py-4 ">
      <li>
        <Link to="/mainClub">
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
};

export default GNB;
