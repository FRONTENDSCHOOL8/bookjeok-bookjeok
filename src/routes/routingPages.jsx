import AtomMaking from '@/AtomMaking';
import { ProtectRoute } from '@/components/Common';
import {
  ChatRoomList,
  CreateClub1,
  CreateClub2,
  CreateClub3,
  CreateClub4,
  DetailClub,
  Intro,
  CreateBookReview,
  Login,
  ManagementClub,
  MyPage,
  Welcome,
  DetailBookReview,
  MyClubList,
} from '@/pages';
import ApplicationClub1, {
  loader as ApplicationClub1Loader,
} from '@/pages/ApplicationClub/ApplicationClub1/ApplicationClub1';
import ApplicationClub2, {
  loader as ApplicationClub2Loader,
} from '@/pages/ApplicationClub/ApplicationClub2/ApplicationClub2';
import { loader as genreLoader } from '@/pages/CreateClub/CreateClub2/CreateClub2';
import { loader as clubDetailLoader } from '@/pages/DetailClub/DetailClub';
import Filter, { loader as filterListLoader } from '@/pages/Filter/Filter';
import MainClub, { loader as clubListLoader } from '@/pages/MainClub/MainClub';
import BasicInfo from '@/pages/SignUp/BasicInfo';
import DetailInfo from '@/pages/SignUp/DetailInfo';
import MainBookReview, {
  loader as bookReviewListLoader,
} from '@/pages/MainBookReview/MainBookReview';

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
    loader: bookReviewListLoader,
  },
  {
    path: '/mainClub/:bookreviewId',
    element: (
      <ProtectRoute>
        <DetailBookReview />
      </ProtectRoute>
    ),
  },
  {
    path: '/mainBookReview/:bookreviewId',
    element: (
      <ProtectRoute>
        <DetailBookReview />
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
    path: '/createClub2',
    element: (
      <ProtectRoute>
        <CreateClub2 />
      </ProtectRoute>
    ),
    loader: genreLoader,
  },
  {
    path: '/createClub3',
    element: (
      <ProtectRoute>
        <CreateClub3 />
      </ProtectRoute>
    ),
  },
  {
    path: '/createClub4',
    element: (
      <ProtectRoute>
        <CreateClub4 />
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
    path: '/createBookReview',
    element: (
      <ProtectRoute>
        <CreateBookReview />
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
