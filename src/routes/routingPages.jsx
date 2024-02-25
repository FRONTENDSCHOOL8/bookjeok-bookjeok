import AtomMaking from '@/AtomMaking';
import { MyClubList } from '@/components/Molecules';
import {
  ChatRoomList,
  CreateClub1,
  Intro,
  Login,
  MainBookReview,
  MainClub,
  MyPage,
  SignUp,
} from '@/pages';

const routingPages = [
  {
    path: '/',
    element: <Intro />,
  },
  {
    path: '/atomMaking',
    element: (
      <AtomMaking disabled type="button">
        다음
      </AtomMaking>
    ),
  },
  {
    path: '/mainClub',
    element: <MainClub></MainClub>,
  },
  {
    path: '/mainBookReview',
    element: <MainBookReview></MainBookReview>,
  },
  {
    path: '/login',
    element: <Login></Login>,
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>,
  },
  {
    path: '/myClubList',
    element: <MyClubList></MyClubList>,
  },
  {
    path: '/createClub',
    element: <CreateClub1></CreateClub1>,
  },
  {
    path: '/chatRoomList',
    element: <ChatRoomList></ChatRoomList>,
  },
  {
    path: '/myPage',
    element: <MyPage></MyPage>,
  },
];

export default routingPages;
