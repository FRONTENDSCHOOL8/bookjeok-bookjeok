import pb from '@/api/pocketbase';
import { Badge, Svg } from '@/components/Atoms';
import { GNB, MainKindToggle } from '@/components/Molecules';
import { calcDay, getDocumentTitle, getPbImgs } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';

export async function loader() {
  const clubs = await pb.collection('socialing').getFullList({
    fields:
      'id,title,dateTime,isOffline,collectionId,location,limitPerson,confirmUser,img,expand.genre.title',
    expand: 'genre,genres.title',
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
        <Link to={`/mainClub/${id}`} className="my-4 flex flex-wrap">
          <div className="relative mx-auto">
            <img className="h-[200px] rounded-5xl" src={photo} alt={title} />
            <Badge className="absolute left-2 top-2">
              {expand.genre.title}
            </Badge>
          </div>
          <div className="flex w-full flex-col gap-1 p-4">
            <div className="flex justify-between">
              <h4 className="text-b-1-medium">{title}</h4>
              <button>
                <Svg id="heart" />
              </button>
            </div>
            <span className="text-b-3-regular text-bjgray-500">
              {calcDay(dateTime)}
            </span>
            <div className="flex justify-between">
              <span className="flex items-center text-b-3-regular text-bjgray-500">
                <Svg width="16px" height="16px" id="pin" />
                {!isOffline ? '온라인' : location}
              </span>
              <span className="flex items-center text-b-3-regular text-bjgray-500">
                <Svg width="16px" height="16px" id="user" />
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
        <Link to="/mainClub/filter">필터</Link>
        <ul className="mx-4 grid grid-cols-2 gap-4">
          <ClubCard />
        </ul>
        <GNB createClub />
      </div>
    </>
  );
}

export default MainClub;
