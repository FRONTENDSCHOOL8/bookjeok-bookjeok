import AtomMaking from '@/AtomMaking';
import { ProtectRoute } from '@/components/Common';
import {
  ChatRoomList,
  CreateClub1,
  DetailClub,
  Intro,
  Login,
  MainBookReview,
  ManagementClub,
  MyPage,
  Welcome,
  MyClubList,
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
    loader: ApplicationClub1Loader,
  },
  {
    path: '/applicationClub2/:clubId',
    element: (
      <ProtectRoute>
        <ApplicationClub2 />
      </ProtectRoute>
    ),
    loader: ApplicationClub2Loader,
  },
  {
    path: '/managementClub',
    element: (
      <ProtectRoute>
        <ManagementClub />
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
