import { GenreButton, MainButton, NomalTitle } from '@/components/Atoms';
import useGetFilter from '@/pages/Filter/useGetFilter';
import useCreateClubStore from '@/store/useCreateClubStore';
import { getDocumentTitle } from '@/utils';
import { useCallback } from 'react';
import { Helmet } from 'react-helmet-async';

export function CreateClub2() {
  const { clubInfo, addGenre, removeGenre } = useCreateClubStore((state) => ({
    clubInfo: state.clubInfo,
    addGenre: state.addGenre,
    removeGenre: state.removeGenre,
  }));

  const filterData = useGetFilter();

  const handlegenreButton = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();

      if (clubInfo.genre === '') {
        addGenre(e.currentTarget.value);
        return;
      }

      if (clubInfo.genre) {
        removeGenre();
        addGenre(e.currentTarget.value);
      }
      if (clubInfo.genre === e.currentTarget.value) {
        removeGenre();
      }
    },
    [clubInfo]
  );

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
                    clubInfo={clubInfo}
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
            className={`my-4 flex w-full items-center justify-center rounded-5xl text-b-1-medium ${clubInfo.genre === '' ? 'pointer-events-none bg-bjgray-300 text-bjgray-500' : 'bg-bjyellow-400 text-bjblack'}`}
            to="/createClub3"
          >
            다음
          </MainButton>
        </div>
      </main>
    </>
  );
}
