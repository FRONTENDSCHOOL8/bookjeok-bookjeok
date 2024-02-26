import Erro404 from '@/pages/Error404/Erro404';

import { createBrowserRouter } from 'react-router-dom';

import BasicInfo from '../pages/SignUp/BasicInfo';
import DetailInfo from '../pages/SignUp/DetailInfo';

const routes = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Erro404 />,
  },
  {
    path: '/atomMaking',
    element: <AtomMaking />,
  },
  {
    path: '/signup',
    element: <BasicInfo />,
    children: [],
  },
  {
    path: '/signup/detail',
    element: <DetailInfo />,
    errorElement: <Erro404 />,
  },
  {
    path: '/Welcome',
    element: <Welcome />,
    errorElement: <Erro404 />,

    children: routingPages,
  },
];

const router = createBrowserRouter(routes);

export default router;
