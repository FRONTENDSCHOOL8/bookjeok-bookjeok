import { MainButton, NomalTitle } from '@/components/Atoms';
import { FilterList } from '@/components/Molecules';
import useFilterStore, { getFilterStrings } from '@/store/useFilterStore.ts';
import useSearchParamsStore, {
  combineParams,
} from '@/store/useSearchParamsStore';
import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import useGetFilter from './useGetFilter';
import { useLayoutEffect } from 'react';

export function Filter() {
  // 필터 초기화 메서드
  const { resetFilter } = useFilterStore();
  // 전역 필터 상태를 문자열로 바꿔주는 메서드
  const filterStrings = useFilterStore(getFilterStrings);
  // 서치파람스 설정을 위한 전역상태
  const { setFilter } = useSearchParamsStore();
  // 전역으로 설정된 파람스들을 URL로 바꿔주는 메서드

  const navigate = useNavigate();

  // 리셋버튼 핸들러
  const handleReset = () => {
    const unsubscribe = useSearchParamsStore.subscribe((state) => {
      combineParams(state);

      // navigate(newSearchParams, { replace: true });
      unsubscribe();
    });
    resetFilter();
  };
  // 제출버튼 핸들러
  const handleSubmitButton = () => {
    const unsubscribe = useSearchParamsStore.subscribe((state) => {
      const newSearchParams = combineParams(state);
      navigate(newSearchParams, { replace: true });
      unsubscribe();
    });

    setFilter(filterStrings);
  };
  // 필터 읽어오기
  const cachedFilterList = useGetFilter();

  useLayoutEffect(() => {
    document.documentElement.style.overflowY = 'hidden';
    return () => {
      document.documentElement.style.removeProperty('overflow-y');
    };
  });
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('모임필터')}</title>
      </Helmet>
      <main>
        <div>
          <NomalTitle
            backLink
            resetButton
            onClickReset={handleReset}
            path="main/club"
          >
            필터
          </NomalTitle>

          <div className="h-[calc(100svh-56px)] overflow-y-auto">
            <ul className="mx-4">
              {Array.isArray(cachedFilterList)
                ? cachedFilterList.map((filterInfo) => {
                    return (
                      <FilterList key={filterInfo.id} filterInfo={filterInfo} />
                    );
                  })
                : '등록된 필터가 없습니다!'}
            </ul>
            <div className="p-4">
              <MainButton onClick={handleSubmitButton} type="button">
                선택완료
              </MainButton>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
