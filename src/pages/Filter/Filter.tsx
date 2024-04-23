import { MainButton, NomalTitle } from '@/components/Atoms';
import { FilterList } from '@/components/Molecules';
import useFilterStore, { getFilterStrings } from '@/store/useFilterStore.ts';
import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import useGetFilter from './useGetFilter';

export function Filter() {
  const navigate = useNavigate();
  const filterStrings = useFilterStore(getFilterStrings);
  const resetFilter = useFilterStore((state) => state.resetFilter);

  const cachedFilterList = useGetFilter();

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('모임필터')}</title>
      </Helmet>
      <main>
        <form
          method="get"
          onReset={(e) => {
            e.preventDefault();
            resetFilter();
          }}
          onSubmit={(e) => {
            e.preventDefault();
            navigate(
              !filterStrings
                ? '/mainClub'
                : `/mainClub?filters=${filterStrings}`,
              {
                state: {
                  filters: filterStrings,
                },
              }
            );
          }}
        >
          <NomalTitle backLink resetButton path="mainClub">
            필터
          </NomalTitle>

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
            <MainButton type="submit">선택완료</MainButton>
          </div>
        </form>
      </main>
    </>
  );
}
