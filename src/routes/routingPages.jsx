import AtomMaking from '@/AtomMaking';
import { queryClient } from '@/client/queryClient';
import { ProtectRoute } from '@/components/Common';
import {
  ApplicationClub1,
  loader as ApplicationClub1Loader,
} from '@/pages/ApplicationClub/ApplicationClub1';
import {
  ApplicationClub2,
  loader as ApplicationClub2Loader,
} from '@/pages/ApplicationClub/ApplicationClub2';
import { CreateBookReview } from '@/pages/CreateBookReview';
import { CreateClub1 } from '@/pages/CreateClub/CreateClub1';
import {
  CreateClub2,
  loader as genreLoader,
} from '@/pages/CreateClub/CreateClub2';
import { CreateClub3 } from '@/pages/CreateClub/CreateClub3';
import { CreateClub4 } from '@/pages/CreateClub/CreateClub4';
import {
  DetailBookReview,
  loader as detailBookReviewloader,
} from '@/pages/DetailBookReview';
import { DetailClub, loader as clubDetailLoader } from '@/pages/DetailClub';
import { Filter, loader as filterListLoader } from '@/pages/Filter';
import { Intro } from '@/pages/Intro';
import { Login } from '@/pages/Login';
import {
  MainBookReview,
  loader as bookReviewListLoader,
} from '@/pages/MainBookReview';
import { MainClub, loader as clubListLoader } from '@/pages/MainClub';
import { ManagementClub, loader as answerLoader } from '@/pages/ManagementClub';
import { MyClubList } from '@/pages/MyClubList';
import { MyPage } from '@/pages/MyPage';
import { BasicInfo, DetailInfo } from '@/pages/SignUp';
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
      return { loader: loader(queryClient), Component: ChatRoom };
    },
  },
  {
    path: '/chatRoomList/:userId',
    async lazy() {
      const { loader, ChatRoomListPage } = await import(
        '@/pages/Chatting/ChatRoomListPage'
      );
      return {
        loader: loader(queryClient),
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
    element: <Welcome />,
  },
];

export default routingPages;
