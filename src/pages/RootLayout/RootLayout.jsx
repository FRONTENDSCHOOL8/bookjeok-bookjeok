import { Outlet } from 'react-router-dom';

function RootLayout() {
  return (
    <div className="max-w-[430px] mx-auto">
      <Outlet />
    </div>
  );
}

export default RootLayout;
