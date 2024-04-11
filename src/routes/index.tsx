import Error404 from '@/pages/Error404/Error404.tsx';
import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '@/components/Common/index';
import routingPages from './routingPages';

const routes = [
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error404 />,
    children: routingPages,
  },
];

const router = createBrowserRouter(routes);

export default router;
