import { useNavigation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import Loading from '../Loading/Loading';

function RootLayout() {
  const { state } = useNavigation();
  return (
    <div className="mx-auto  max-w-[430px] bg-white">
      {state === 'loading' ? <Loading /> : <Outlet />}
    </div>
  );
}

export default RootLayout;
