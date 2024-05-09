import {
  MainBookReview,
  loader as bookReviewListLoader,
} from '@/pages/MainBookReview';
import {
  DetailBookReview,
  loader as detailBookReviewloader,
} from '@/pages/DetailBookReview';
import { Intro } from '@/pages/Intro';
import { Login } from '@/pages/Login';
import AtomMaking from '@/AtomMaking';
import { MyPage } from '@/pages/MyPage';
import { SignUp } from '@/pages/SignUp';
import { Welcome } from '@/pages/Welcome';
import { MyClubList } from '@/pages/MyClubList';
import { EditProfile } from '@/pages/EditProfile';
import { ProtectRoute } from '@/components/Common';
import { CreateBookReview } from '@/pages/CreateBookReview';
import { CreateClub1, CreateClub3, CreateClub4 } from '@/pages/CreateClub';
import { DetailClub, loader as clubDetailLoader } from '@/pages/DetailClub';
import { ManagementClub, loader as answerLoader } from '@/pages/ManagementClub';
import {
  ApplicationClub,
  loader as ApplicationLoader,
} from '@/pages/ApplicationClub';
import { Sort } from '@/pages/Sort';

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
    path: '/main/club',
    async lazy() {
      const { loader, MainClub } = await import('@/pages/MainClub');
      return { Component: MainClub, loader: loader };
    },
    children: [{ path: 'sort', element: <Sort /> }],
  },
  {
    path: '/main/club/filter',
    async lazy() {
      const { loader, Filter } = await import('@/pages/Filter');
      return { Component: Filter, loader: loader };
    },
  },
  {
    path: '/club/:clubId',
    element: (
      <ProtectRoute>
        <DetailClub />
      </ProtectRoute>
    ),
    loader: clubDetailLoader,
  },
  {
    path: '/main/bookReview',
    element: <MainBookReview />,
    loader: bookReviewListLoader,
  },
  {
    path: '/bookReview/:bookreviewId',
    element: (
      <ProtectRoute>
        <DetailBookReview />
      </ProtectRoute>
    ),
    loader: detailBookReviewloader,
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
    async lazy() {
      const { loader } = await import('@/pages/Filter');
      const { CreateClub2 } = await import('@/pages/CreateClub');
      return { Component: CreateClub2, loader: loader };
    },
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
        <ApplicationClub />
      </ProtectRoute>
    ),
    loader: ApplicationLoader,
  },
  {
    path: '/managementClub/:clubId',
    element: (
      <ProtectRoute>
        <ManagementClub />
      </ProtectRoute>
    ),
    loader: answerLoader,
  },
  {
    path: '/chatRoom/:chattingRoomId',
    async lazy() {
      const { loader, ChatRoom } = await import('@/pages/Chatting/ChatRoom');
      return { loader: loader, Component: ChatRoom };
    },
  },
  {
    path: '/chatRoomList/:userId',
    async lazy() {
      const { loader, ChatRoomListPage } = await import(
        '@/pages/Chatting/ChatRoomListPage'
      );
      return {
        loader: loader,
        Component: ChatRoomListPage,
      };
    },
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
    path: '/editProfile/:userId',
    element: (
      <ProtectRoute>
        <EditProfile />
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
    element: <SignUp />,
  },
  {
    path: '/Welcome',
    element: <Welcome />,
  },
];

export default routingPages;
