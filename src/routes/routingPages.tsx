import AtomMaking from '@/AtomMaking';
import { ProtectRoute } from '@/components/Common';
import { ApplicationClub1 } from '@/pages/ApplicationClub/ApplicationClub1';
import {
  ApplicationClub2,
  loader as ApplicationClub2Loader,
} from '@/pages/ApplicationClub/ApplicationClub2';
import { CreateBookReview } from '@/pages/CreateBookReview';
import { CreateClub1, CreateClub3, CreateClub4 } from '@/pages/CreateClub';
import {
  DetailBookReview,
  loader as detailBookReviewloader,
} from '@/pages/DetailBookReview';
import { DetailClub, loader as clubDetailLoader } from '@/pages/DetailClub';
import { EditProfile } from '@/pages/EditProfile';
import { Intro } from '@/pages/Intro';
import { Login } from '@/pages/Login';
import {
  MainBookReview,
  loader as bookReviewListLoader,
} from '@/pages/MainBookReview';
import { ManagementClub, loader as answerLoader } from '@/pages/ManagementClub';
import { MyClubList } from '@/pages/MyClubList';
import { MyPage } from '@/pages/MyPage';
import { SignUp } from '@/pages/SignUp';
import { Welcome } from '@/pages/Welcome';

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
    async lazy() {
      const { loader, MainClub } = await import('@/pages/MainClub');
      return { Component: MainClub, loader: loader };
    },
  },
  {
    path: '/mainClub/filter',
    async lazy() {
      const { loader, Filter } = await import('@/pages/Filter');
      return { Component: Filter, loader: loader };
    },
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
    element: <MainBookReview />,
    loader: bookReviewListLoader,
  },
  {
    path: '/mainBookReview/:bookreviewId',
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
        <ApplicationClub1 />
      </ProtectRoute>
    ),
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
      <ProtectRoute >
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
