import pb from '@/api/pocketbase';
import { Badge, MainButton, Svg } from '@/components/Atoms';
import { GNB, MainKindToggle } from '@/components/Molecules';
import { calcDay, getDocumentTitle, getPbImgs } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';

export async function loader({ request }) {
  const url = new URL(request.url);
  const filters = url.searchParams.get('filters');

  let filterQuery = null;

  if (filters) {
    if (filters.includes(',')) {
      filterQuery = filters
        .split('.')
        .map((filter) => `genre.title~"${filter}"`)
        .join('||');
    } else {
      filterQuery = `genre.title~"${filters}"`;
    }
  }

  const clubs = await pb.collection('socialing').getFullList({
    fields:
      'id,title,dateTime,isOffline,collectionId,location,limitPerson,confirmUser,img,expand.genre.title',
    expand: 'genre',
    filter: filterQuery,
  });

  const clubItems = clubs.map((club) => {
    const photoURL = getPbImgs(club);
    club.photo = photoURL;
    return club;
  });
  return clubItems;
}

function ClubCard() {
  const getClubList = useLoaderData();
  return getClubList.map(
    ({
      id,
      photo,
      title,
      expand,
      dateTime,
      isOffline,
      location,
      limitPerson,
      confirmUser,
    }) => (
      <li key={id}>
        <Link to={`/mainClub/${id}`} className="mx-2 my-2 flex flex-wrap">
          <div className="relative mx-auto">
            <img className="h-[200px] rounded-5xl" src={photo} alt={title} />
            <Badge className="absolute left-2 top-2">
              {expand.genre.title}
            </Badge>
          </div>
          <div className="flex w-full flex-col gap-1 p-4">
            <div className="flex justify-between">
              <h4 className="max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-b-1-medium">
                {title}
              </h4>
              <button>
                <Svg id="heart" />
              </button>
            </div>
            <span className="text-b-3-regular text-bjgray-500">
              {calcDay(dateTime)}
            </span>
            <div className="flex justify-between">
              <span className="flex items-center text-b-3-regular text-bjgray-500">
                <Svg color="#9e9e9e" width={16} height={16} id="pin" />
                {!isOffline ? '온라인' : location}
              </span>
              <span className="flex items-center text-b-3-regular text-bjgray-500">
                <Svg color="#9e9e9e" width={16} height={16} id="user" />
                {confirmUser.length}/{limitPerson}
              </span>
            </div>
          </div>
        </Link>
      </li>
    )
  );
}

function MainClub() {
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('모임')}</title>
      </Helmet>
      <div className="relative flex h-screen w-full flex-col">
        <header className="flex items-center  justify-center  py-4 text-center text-b-1-medium ">
          북적북적
        </header>
        <MainKindToggle />
        <section className="flex items-center justify-center gap-4 pt-2">
          <MainButton
            className="mx-2"
            size="sm"
            color="secondary"
            to="/mainClub/"
          >
            정렬
          </MainButton>
          <MainButton
            className="mx-2 h-9"
            size="sm"
            color="secondary"
            to="/mainClub/filter"
          >
            필터
          </MainButton>
        </section>
        <main>
          <ul className="mb-[65px] grid grid-cols-2 gap-4">
            <ClubCard />
          </ul>
        </main>
        <GNB createClub className="fixed" />
      </div>
    </>
  );
}

export default MainClub;
