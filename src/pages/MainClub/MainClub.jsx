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

            <button className="absolute bottom-3 right-3">
              <Svg
                id="heart-filled"
                color="#feeb70"
                size={30}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 blur-sm"
              />
              <Svg
                id="heart-filled"
                color="#fee440"
                size={30}
                className="relative"
              />
            </button>
          </figure>
          <div className="flex w-full flex-col gap-y-1 px-1 py-4 pt-3">
            <div className="flex justify-between">
              <h3 className="line-clamp-2 h-12 max-w-full text-b-1-regular">
                {title}
              </h3>
            </div>
            <div className="text-pretty text-b-3-medium text-bjgray-500">
              <Svg
                color="#9e9e9e"
                size={14}
                id="calendar"
                className="mr-[2px] inline-block align-middle"
              />
              <span className="align-middle">{calcDay(dateTime)}</span>
            </div>
            <div className="flex justify-between">
              <span className="flex items-center text-pretty text-b-3-medium text-bjgray-500">
                <Svg
                  color="#9e9e9e"
                  width={14}
                  height={14}
                  id="pin"
                  className="mr-[2px] flex-shrink-0 align-middle"
                />
                <span className="line-clamp-1">
                  {!isOffline ? '온라인' : location}
                </span>
              </span>
              <span className="flex items-center text-b-3-medium text-bjgray-500">
                <Svg
                  color="#9e9e9e"
                  width={14}
                  height={14}
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
        <section className="flex items-center justify-center gap-4 px-4 py-4">
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
          <ul className="mb-[65px] grid grid-cols-2 gap-x-4 gap-y-5">
            <ClubCard />
          </ul>
        </main>
        <GNB createClub className="fixed" />
      </div>
    </>
  );
}
