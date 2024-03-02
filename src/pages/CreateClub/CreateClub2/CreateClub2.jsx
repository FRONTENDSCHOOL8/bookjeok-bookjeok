import pb from '@/api/pocketbase';
import { MainButton, NomalTitle } from '@/components/Atoms';
import useCreateClubStore from '@/store/useCreateClubStore';
import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

function CreateClub2() {
  const genres = useLoaderData();
  const { clubInfo, addGenre, removeGenre } = useCreateClubStore((state) => ({
    clubInfo: state.clubInfo,
    addGenre: state.addGenre,
    removeGenre: state.removeGenre,
  }));

  const handlegenreButton = (e) => {
    e.preventDefault();
    if (clubInfo.genre.includes(e.target.name)) {
      removeGenre(e.target.name);
    } else {
      addGenre(e.target.name);
    }
  };

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('모임 만들기')}</title>
      </Helmet>
      <main className="flex h-svh flex-col justify-between">
        <div>
          <NomalTitle backLink subText="2 of 4">
            모임 만들기
          </NomalTitle>
          <h2 className="p-4 text-h-2-semibold">모임주제를 선택해볼까요?</h2>
          <div className="flex flex-col px-4">
            <span className="text-b-2-regular text-bjgray-500">
              책 장르 (최소 1개 이상)
            </span>
            <ul className="flex flex-wrap gap-3 py-4">
              <GenreButton
                genres={genres}
                state={clubInfo}
                onClick={handlegenreButton}
              />
            </ul>
          </div>
        </div>
        <div className="px-4">
          <MainButton
            color="custom"
            className={`my-4 flex w-full items-center justify-center rounded-5xl text-b-1-medium focus:outline-none focus-visible:ring focus-visible:ring-bjblack/10 ${clubInfo.genre.length < 1 ? 'pointer-events-none bg-bjgray-300 text-bjgray-500' : 'bg-bjyellow-400 text-bjblack'}`}
            to="/createClub3"
          >
            다음
          </MainButton>
        </div>
      </main>
    </>
  );
}

export default CreateClub2;

export async function loader() {
  const data = await pb.collection('genres').getFullList();
  return data;
}

function GenreButton({ className, state, genres, onClick, ...restProps }) {
  const BASE_SYTLE = {
    className: 'h-9 rounded-5xl border px-4 text-b-2-medium',
  };

  return genres.map(({ id, title }) => (
    <li key={id}>
      <button
        type="button"
        name={title}
        onClick={onClick}
        className={`${BASE_SYTLE.className} ${className} ${state.genre.includes(title) ? 'bg-black text-white' : 'bg-white text-bjblack'}`}
        {...restProps}
      >
        {title}
      </button>
    </li>
  ));
}
