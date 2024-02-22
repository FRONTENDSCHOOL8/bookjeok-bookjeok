import { MainButton } from '@/components/Atoms';
import { Link } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';

const routes = [
  {
    path: '/',
    element: <Link to="/atoms">atoms로 이동</Link>,
  },
  {
    path: '/atoms',
    element: (
      <MainButton disabled type="button">
        다음
      </MainButton>
    ),
  },
];

const router = createBrowserRouter(routes);

export default router;
