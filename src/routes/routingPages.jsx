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
  Welcome,
} from '@/pages';
import BasicInfo from '@/pages/SignUp/BasicInfo';
import DetailInfo from '@/pages/SignUp/DetailInfo';

const routingPages = [
  {
    path: '/',
    element: <Intro />,
  },
  {
    path: '/atomMaking',
    element: <AtomMaking />,
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

  {
    path: '/signup',
    element: <BasicInfo />,
  },
  {
    path: '/signup/detail',
    element: <DetailInfo />,
  },
  {
    path: '/Welcome',
    element: <Welcome />,
  },
];

export default routingPages;
