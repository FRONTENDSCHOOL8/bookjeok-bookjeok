import AtomMaking from '@/AtomMaking';
import { MyClubList } from '@/components/Molecules';
import {
  ChatRoomList,
  CreateClub1,
  DetailClub,
  Intro,
  Login,
  MainBookReview,
  MyPage,
  Welcome,
} from '@/pages';
import { loader as clubDetailLoader } from '@/pages/DetailClub/DetailClub';
import Filter, { loader as filterListLoader } from '@/pages/Filter/Filter';
import MainClub, { loader as clubListLoader } from '@/pages/MainClub/MainClub';
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
    element: <MainClub />,
    loader: clubListLoader,
  },
  {
    path: '/mainClub/filter',
    element: <Filter />,
    loader: filterListLoader,
  },
  {
    path: '/mainClub/:clubId',
    element: <DetailClub />,
    loader: clubDetailLoader,
  },
  {
    path: '/mainBookReview',
    element: <MainBookReview />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/myClubList',
    element: <MyClubList />,
  },
  {
    path: '/createClub',
    element: <CreateClub1 />,
  },
  {
    path: '/chatRoomList',
    element: <ChatRoomList />,
  },
  {
    path: '/myPage',
    element: <MyPage />,
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
