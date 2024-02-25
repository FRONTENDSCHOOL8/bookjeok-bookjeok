import Erro404 from '@/pages/Error404/Erro404';
import RootLayout from '@/pages/RootLayout/RootLayout';
import routingPages from '@/routes/routingPages';
import { createBrowserRouter } from 'react-router-dom';

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
