import { queryClient } from '@/client/queryClient';
import router from '@/routes';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';

queryClient;
// 리액트 라우터 라우터 생성

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools position="top-right" />
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
