import Erro404 from '@/pages/Error404/Erro404';
import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '@/components/Common/index';
import routingPages from './routingPages';

const routes = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Erro404 />,
    children: routingPages,
  },
];

const router = createBrowserRouter(routes);

export default router;
