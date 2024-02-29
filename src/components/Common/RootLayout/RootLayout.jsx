import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <div className="mx-auto max-w-[430px] bg-white">
      <Outlet />
    </div>
  );
}

export default RootLayout;
