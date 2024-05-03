import pb from '@/api/pocketbase';
import { MainButton, NomalTitle } from '@/components/Atoms';
import { ClubCard, GNB, MainKindToggle } from '@/components/Molecules';
import { useLoaderData } from '@/hooks';
import { Texpand, Texpand2, getClubListQueryOption } from '@/pages/MainClub';
import {
  Collections,
  SocialingResponse,
  UsersResponse,
} from '@/types/pocketbase-types';
import { getDocumentTitle } from '@/utils';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import { useLocation } from 'react-router-dom';

interface Tloader {
  userInfo: UsersResponse<Texpand2>;
  clubData: SocialingResponse<Texpand>[];
}
export function MainClub() {
  const { userInfo, clubData: loadedClubList } = useLoaderData<Tloader>();
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

  const { data: nowUser } = useQuery({
    queryFn: async () => {
      const data = await pb
        .collection(Collections.Users)
        .getOne(userInfo!.id, { expand: 'like' });
      return data;
    },
    queryKey: ['user', userInfo?.id],
    initialData: userInfo,
  });

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
            to="/main/club"
            svgId="direction-vertical"
          >
            정렬
          </MainButton>
          <MainButton
            size="sm"
            color="secondary"
            to="/main/club/filter"
            svgId="filter"
          >
            필터
          </MainButton>
        </section>
        <main className="px-4 py-2">
          <ul className="mb-[65px] grid grid-cols-2 gap-x-4 gap-y-5">
            {clubList.map((clubInfo) => {
              return (
                <ClubCard
                  key={clubInfo.id}
                  clubInfo={clubInfo}
                  userInfo={nowUser}
                />
              );
            })}
            <li role="none" ref={ref}></li>
          </ul>
        </main>
        <GNB createClub className="fixed" />
      </div>
    </>
  );
}
