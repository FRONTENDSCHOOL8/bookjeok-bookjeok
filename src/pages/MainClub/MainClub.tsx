import pb from '@/api/pocketbase';
import { MainButton, NomalTitle } from '@/components/Atoms';
import { ClubCard, GNB, MainKindToggle } from '@/components/Molecules';
import useUserInfoStore from '@/store/useUserInfoStore';
import { getDocumentTitle } from '@/utils';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import { useLocation, useRevalidator } from 'react-router-dom';
import { getClubListQueryOption, Texpand } from '@/pages/MainClub';
import { SocialingResponse, UsersResponse } from '@/types/pocketbase-types';
import { useLoaderData } from '@/hooks';

interface Texpand2 {
  like: SocialingResponse;
}
export function MainClub() {
  const loadedClubList = useLoaderData<SocialingResponse<Texpand>[]>();
  const revalidator = useRevalidator();
  const { state } = useLocation();
  const { userInfo } = useUserInfoStore();

  const filters = state?.filters ?? '';

  const {
    data: cachedClubList,
    hasNextPage,
    fetchNextPage,
    refetch,
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

  const handleLike =
    (clubId: string) => async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();
      e.preventDefault();
      const nowUser = await pb
        .collection('users')
        .getOne<UsersResponse<Texpand2>>(userInfo.id, { expand: 'like' });

      const clickedClub = clubList.find((i) => i.id === clubId);
      const addedLikeListForSocialing = clickedClub?.like
        ? [...clickedClub?.like, userInfo.id]
        : [userInfo.id];
      const addedLikeListForUser = [...nowUser.like, clubId];
      const removedLikeListForSocialing = clickedClub?.like.filter(
        (i) => i !== userInfo.id
      );
      const removedLikeListForUser = nowUser.like.filter((i) => i !== clubId);

      if (clickedClub?.like.includes(userInfo.id)) {
        console.log('좋아요취소');
        await pb
          .collection('socialing')
          .update(clubId, { like: removedLikeListForSocialing });
        await pb
          .collection('users')
          .update(userInfo.id, { like: removedLikeListForUser });
      } else {
        console.log('좋아요 추가');
        await pb
          .collection('socialing')
          .update(clubId, { like: addedLikeListForSocialing });
        await pb
          .collection('users')
          .update(userInfo.id, { like: addedLikeListForUser });
      }
      refetch();
      revalidator.revalidate();
    };

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
                  userInfo={userInfo}
                  handleLike={handleLike}
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
