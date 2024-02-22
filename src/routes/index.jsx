import { MainButton } from '@/components/Atoms';
import Erro404 from '@/pages/Error404/Erro404';
import { Intro, SignUp } from '@/pages/index';
import { createBrowserRouter } from 'react-router-dom';
Erro404;
const routes = [
  {
    path: '/',
    element: <Intro />,
    errorElement: <Erro404 />,
  },
  {
    path: '/atoms',
    element: (
      <MainButton disabled type="button">
        다음
      </MainButton>
    ),
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>,
  },
];

const router = createBrowserRouter(routes);

export default router;
