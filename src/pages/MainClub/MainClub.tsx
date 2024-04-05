import { MainButton, NomalTitle } from '@/components/Atoms';
import { ClubCard, GNB, MainKindToggle } from '@/components/Molecules';
import { getDocumentTitle } from '@/utils';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import { useLoaderData, useLocation } from 'react-router-dom';
import { getClubListQueryOption } from './queryOption';
export function MainClub() {
  const loadedClubList = useLoaderData();
  const { state } = useLocation();

  const filters = state?.filters ?? '';

  const {
    data: cachedClubList,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    ...getClubListQueryOption(filters, 10, loadedClubList),
  });

  const clubList = cachedClubList
    ? cachedClubList.pages.flatMap((page) => page.items)
    : [];

  const [ref, isView] = useInView();
  useEffect(() => {
    if (isView && hasNextPage) {
      fetchNextPage();
    }
  });

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
            {clubList.map((clubInfo) => {
              return <ClubCard key={clubInfo.id} clubInfo={clubInfo} />;
            })}
            <li role="none" ref={ref}></li>
          </ul>
        </main>
        <GNB createClub className="fixed" />
      </div>
    </>
  );
}
