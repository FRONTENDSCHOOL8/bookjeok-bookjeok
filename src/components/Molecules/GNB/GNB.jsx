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
    <ul className="flex justify-evenly border-t bg-white py-4 sticky bottom-0 left-0 w-full ">
      <li>
        <Link to="/mainClub">
          <Svg width="32px" height="32px" id="logo" />
        </Link>
      </li>
      <li>
        <Link to="/myClubList">
          <Svg width="32px" height="32px" id="calendar" />
        </Link>
      </li>
      <li>
        <Link to={centerIconPath}>
          <Svg width="32px" height="32px" id="plus" />
        </Link>
      </li>
      <li>
        <Link to="/chatRoomList">
          <Svg width="32px" height="32px" id="chat" />
        </Link>
      </li>
      <li>
        <Link to="/myPage">
          <Svg width="32px" height="32px" id="user" />
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
