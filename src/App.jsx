import router from '@/routes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { HelmetProvider } from 'react-helmet-async';
import { RouterProvider } from 'react-router-dom';

// 탠스택 쿼리 클라이언트 생성
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {},
  },
});

// 리액트 라우터 라우터 생성

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
