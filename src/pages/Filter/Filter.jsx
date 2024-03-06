import { CheckboxForm, MainButton, NomalTitle } from '@/components/Atoms';
import useFilterStore, { getFilterStrings } from '@/store/useFilterStore';
import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useNavigate } from 'react-router-dom';

function FilterList() {
  const filterList = useLoaderData();

  const { addFilter, removeFilter, filterListState } = useFilterStore(
    (state) => ({
      addFilter: state.addFilter,
      removeFilter: state.removeFilter,
      filterListState: state.filterList,
    })
  );
  console.log(filterListState);
  const handleFilterCheckbox = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      addFilter(name);
    } else {
      removeFilter(name);
    }
  };

  return filterList.map(({ id, title }) => {
    return (
      <li key={id}>
        <CheckboxForm
          name={title}
          className="h-[64px]"
          id={id}
          onChange={handleFilterCheckbox}
        >
          {title}
        </CheckboxForm>
      </li>
    );
  });
}

export function Filter() {
  const navigate = useNavigate();
  const filterStrings = useFilterStore(getFilterStrings);
  // const resetFilter = useFilterStore((state) => state.resetFilter);

  // useLayoutEffect(() => {
  //   resetFilter();
  // }, [resetFilter]);
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('모임필터')}</title>
      </Helmet>
      <main>
        <form
          method="get"
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
          <NomalTitle backLink textButton path="/mainClub">
            필터
          </NomalTitle>
          <ul className="mx-4">
            <FilterList />
          </ul>
          <div className="p-4">
            <MainButton as="button" type="submit">
              선택완료
            </MainButton>
          </div>
        </form>
      </main>
    </>
  );
}
