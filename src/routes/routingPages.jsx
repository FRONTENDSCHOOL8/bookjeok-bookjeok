import AtomMaking from '@/AtomMaking';
import { ProtectRoute } from '@/components/Common';
import { MyClubList } from '@/components/Molecules';
import {
  ApplicationClub1,
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
    element: (
      <ProtectRoute>
        <Filter />
      </ProtectRoute>
    ),
    loader: filterListLoader,
  },
  {
    path: '/mainClub/:clubId',
    element: (
      <ProtectRoute>
        <DetailClub />
      </ProtectRoute>
    ),
    loader: clubDetailLoader,
  },
  {
    path: '/mainBookReview',
    element: (
      <ProtectRoute>
        <MainBookReview />
      </ProtectRoute>
    ),
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/myClubList',
    element: (
      <ProtectRoute>
        <MyClubList />
      </ProtectRoute>
    ),
  },
  {
    path: '/createClub',
    element: (
      <ProtectRoute>
        <CreateClub1 />
      </ProtectRoute>
    ),
  },
  {
    path: '/applicationClub/:clubId',
    element: (
      <ProtectRoute>
        <ApplicationClub1 />
      </ProtectRoute>
    ),
  },
  {
    path: '/chatRoomList',
    element: (
      <ProtectRoute>
        <ChatRoomList />
      </ProtectRoute>
    ),
  },
  {
    path: '/myPage',
    element: (
      <ProtectRoute>
        <MyPage />
      </ProtectRoute>
    ),
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
    element: (
      <ProtectRoute>
        <Welcome />
      </ProtectRoute>
    ),
  },
];

export default routingPages;
