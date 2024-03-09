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
        <Link to={`/mainClub/${id}`} className="flex flex-wrap">
          <figure className="relative mx-auto w-full">
            <img
              className="aspect-square w-full rounded-5xl border-[1px] border-bjgray-200 object-cover"
              src={photo}
              alt={title}
            />
            <Badge className="absolute left-2 top-2 w-[30%]">
              {expand.genre.title}
            </Badge>
          </figure>
          <div className="flex w-full flex-col gap-1 px-2 py-4 pt-3">
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
                <Svg
                  color="#9e9e9e"
                  width={16}
                  height={16}
                  id="pin"
                  className="mr-[2px] flex-shrink-0"
                />
                <span className="line-clamp-1">
                  {!isOffline ? '온라인' : location}
                </span>
              </span>
              <span className="flex items-center text-b-3-regular text-bjgray-500">
                <Svg
                  color="#9e9e9e"
                  width={16}
                  height={16}
                  id="user"
                  className="mr-[2px]"
                />
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
      <div className="relative flex min-h-svh w-full flex-col">
        <NomalTitle>북적북적</NomalTitle>
        <MainKindToggle />
        <section className="flex items-center justify-center gap-4 px-4 py-2">
          <MainButton
            size="sm"
            color="secondary"
            to="/mainClub/"
            svgId="direction-vertical"
          >
            정렬
          </MainButton>
          <MainButton
            size="sm"
            color="secondary"
            to="/mainClub/filter"
            svgId="filter"
          >
            필터
          </MainButton>
        </section>
        <main className="px-4 py-2">
          <ul className="mb-[65px] grid grid-cols-2 gap-4">
            <ClubCard />
          </ul>
        </main>
        <GNB createClub className="fixed" />
      </div>
    </>
  );
}
