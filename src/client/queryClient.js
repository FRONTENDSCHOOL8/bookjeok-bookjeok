import { QueryClient } from '@tanstack/react-query';
// 탠스택 쿼리 클라이언트 생성
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {},
  },
});
