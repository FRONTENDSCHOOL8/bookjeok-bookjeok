import { GenreButton, MainButton, NomalTitle } from '@/components/Atoms';
import useGetFilter from '@/pages/Filter/useGetFilter';
import useCreateClubStore from '@/store/useCreateClubStore';
import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';

export function CreateClub2() {
  const { clubInfo, addGenre, removeGenre } = useCreateClubStore((state) => ({
    clubInfo: state.clubInfo,
    addGenre: state.addGenre,
    removeGenre: state.removeGenre,
  }));

  const filterData = useGetFilter();

  const handlegenreButton = (e) => {
    e.preventDefault();
    if (clubInfo.genre === null) {
      addGenre(e.target.value);
      return;
    }

    if (clubInfo.genre.includes(e.target.value)) {
      removeGenre(e.target.value);
    } else {
      addGenre(e.target.value);
    }
  };

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('모임 만들기')}</title>
      </Helmet>
      <main className="flex min-h-svh flex-col justify-between">
        <div>
          <NomalTitle backLink subText="2 of 4">
            모임 만들기
          </NomalTitle>
          <h2 className="p-4 text-h-2-semibold">모임주제를 선택해볼까요?</h2>
          <div className="flex flex-col px-4">
            <span className="text-b-2-regular text-bjgray-500">
              책 장르 (1개 필수 선택)
            </span>
            <ul className="flex flex-wrap gap-3 py-4">
              {filterData.map((filterData) => {
                return (
                  <GenreButton
                    key={filterData.id}
                    filterData={filterData}
                    state={clubInfo}
                    onClick={handlegenreButton}
                  />
                );
              })}
            </ul>
          </div>
        </div>
        <div className="px-4">
          <MainButton
            color="custom"
            className={`my-4 flex w-full items-center justify-center rounded-5xl text-b-1-medium ${clubInfo.genre === null ? 'pointer-events-none bg-bjgray-300 text-bjgray-500' : 'bg-bjyellow-400 text-bjblack'}`}
            to="/createClub3"
          >
            다음
          </MainButton>
        </div>
      </main>
    </>
  );
}
