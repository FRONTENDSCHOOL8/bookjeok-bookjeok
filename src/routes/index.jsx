import AtomMaking from '@/AtomMaking';
import { MyClubList } from '@/components/Molecules';
import Erro404 from '@/pages/Error404/Erro404';
import {
  ChatRoomList,
  CreateClub1,
  Intro,
  Login,
  MainBookReview,
  MainClub,
  MyPage,
  SignUp,
} from '@/pages/index';
import { createBrowserRouter } from 'react-router-dom';

const routes = [
  {
    path: '/',
    element: <Intro />,
    errorElement: <Erro404 />,
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

const router = createBrowserRouter(routes);

export default router;
