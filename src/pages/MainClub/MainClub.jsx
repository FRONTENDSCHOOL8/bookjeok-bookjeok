import { Badge, MainButton, NomalTitle, Svg } from '@/components/Atoms';
import { GNB, MainKindToggle } from '@/components/Molecules';
import { calcDay, getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { Link, useLoaderData } from 'react-router-dom';

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
          <figcaption className="relative mx-auto">
            <img
              className="aspect-square w-[200px] rounded-5xl"
              src={photo}
              alt={title}
            />
            <Badge className="absolute left-2 top-2 w-[30%]">
              {expand.genre.title}
            </Badge>
          </figcaption>
          <div className="flex w-full flex-col gap-1 p-4">
            <div className="flex justify-between">
              <h3 className="max-w-full truncate text-b-1-medium">{title}</h3>
              <button>
                <Svg id="heart" />
              </button>
            </div>
            <span className="text-pretty text-b-3-regular text-bjgray-500">
              {calcDay(dateTime)}
            </span>
            <div className="flex justify-between">
              <span className="flex items-center text-pretty text-b-3-regular text-bjgray-500">
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

export function MainClub() {
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('모임')}</title>
      </Helmet>
      <div className="relative flex w-full flex-col">
        <NomalTitle>북적북적</NomalTitle>
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
