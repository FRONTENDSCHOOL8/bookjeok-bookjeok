import { useNavigation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Loading } from '@/components/Common';

function RootLayout() {
  const { state } = useNavigation();
  return (
    <div className="mx-auto min-h-svh w-full max-w-[430px] bg-white">
      {state === 'loading' ? <Loading /> : <Outlet />}
    </div>
  );
}

export default RootLayout;
