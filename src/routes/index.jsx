import { MainButton } from '@/components/Atoms';
import { SignUp } from '@/pages/index';
import { Link } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';

import BasicInfo from '../pages/SignUp/BasicInfo';
import DetailInfo from '../pages/SignUp/DetailInfo';
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
  {
    path: '/signup',
    element: <BasicInfo />,
    children: [],
  },
  {
    path: '/signup/detail',
    element: <DetailInfo />,
  },
];

const router = createBrowserRouter(routes);

export default router;
