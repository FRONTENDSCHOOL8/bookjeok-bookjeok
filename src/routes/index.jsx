import AtomMaking from '@/AtomMaking';
import Erro404 from '@/pages/Error404/Erro404';
import { Intro, SignUp } from '@/pages/index';
import { createBrowserRouter } from 'react-router-dom';

const routes = [
  {
    path: '/',
    element: <Intro />,
    errorElement: <Erro404 />,
  },
  {
    path: '/atomMaking',
    element: <AtomMaking />,
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>,
  },
];

const router = createBrowserRouter(routes);

export default router;
