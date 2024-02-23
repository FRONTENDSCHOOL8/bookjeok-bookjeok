import { Svg } from '@/components/Atoms';
import { Link } from 'react-router-dom';

function GNB() {
  return (
    <ul className="flex justify-evenly border-t bg-white py-4 sticky ">
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
        <Link to="/createClub">
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

export default GNB;
