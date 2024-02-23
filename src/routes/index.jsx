import {
  MainButton,
  ModalButton,
  OutlineButton,
  SmallButton,
} from '@/components/Atoms';
import { SignUp } from '@/pages/index';
import { Link } from 'react-router-dom';
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
    path: '/atoms',
    element: (
      <>
        <MainButton type="button" className="large_primary">
          버튼
        </MainButton>
        <MainButton type="button" className="large_secondary">
          버튼
        </MainButton>
        <MainButton disabled type="button">
          버튼
        </MainButton>
        <ModalButton type="button" className="large_primary">
          버튼
        </ModalButton>
        <ModalButton type="button" className="large_secondary">
          버튼
        </ModalButton>
        <ModalButton disabled type="button">
          버튼
        </ModalButton>
        <OutlineButton type="button">버튼</OutlineButton>
        <OutlineButton disabled type="button">
          버튼
        </OutlineButton>
        <SmallButton type="button">버튼</SmallButton>
        <SmallButton disabled type="button">
          버튼
        </SmallButton>
      </>
    ),
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>,
  },
];

const router = createBrowserRouter(routes);

export default router;
