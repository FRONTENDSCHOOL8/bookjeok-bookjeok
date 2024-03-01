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
  ProtectRoute,
  Welcome,
} from '@/pages';
import { loader as clubDetailLoader } from '@/pages/DetailClub/DetailClub';
import Filter, { loader as filterListLoader } from '@/pages/Filter/Filter';
import MainClub, { loader as clubListLoader } from '@/pages/MainClub/MainClub';
import ApplicationClub1, {
  loader as ApplicationClub1Loader,
} from '@/pages/ApplicationClub/ApplicationClub1/ApplicationClub1';
import ApplicationClub2, {
  loader as ApplicationClub2Loader,
} from '@/pages/ApplicationClub/ApplicationClub2/ApplicationClub2';
import BasicInfo from '@/pages/SignUp/BasicInfo';
import DetailInfo from '@/pages/SignUp/DetailInfo';

const isLogined = true;

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
      <ProtectRoute isAllowed={isLogined}>
        <Filter />
      </ProtectRoute>
    ),
    loader: filterListLoader,
    action: Filter.action,
  },
  {
    path: '/mainClub/:clubId',
    element: (
      <ProtectRoute isAllowed={isLogined}>
        <DetailClub />
      </ProtectRoute>
    ),
    loader: clubDetailLoader,
  },
  {
    path: '/mainBookReview',
    element: (
      <ProtectRoute isAllowed={isLogined}>
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
      <ProtectRoute isAllowed={isLogined}>
        <MyClubList />
      </ProtectRoute>
    ),
  },
  {
    path: '/createClub',
    element: (
      <ProtectRoute isAllowed={isLogined}>
        <CreateClub1 />
      </ProtectRoute>
    ),
  },
  {
    path: '/applicationClub/:clubId',
    element: (
      <ProtectRoute isAllowed={isLogined}>
        <ApplicationClub1 />
      </ProtectRoute>
    ),
    loader: ApplicationClub1Loader,
  },
  {
    path: '/applicationClub2/:clubId',
    element: (
      <ProtectRoute isAllowed={isLogined}>
        <ApplicationClub2 />
      </ProtectRoute>
    ),
    loader: ApplicationClub2Loader,
  },
  {
    path: '/chatRoomList',
    element: (
      <ProtectRoute isAllowed={isLogined}>
        <ChatRoomList />
      </ProtectRoute>
    ),
  },
  {
    path: '/myPage',
    element: (
      <ProtectRoute isAllowed={isLogined}>
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
      <ProtectRoute isAllowed={isLogined}>
        <Welcome />
      </ProtectRoute>
    ),
  },
];

export default routingPages;
