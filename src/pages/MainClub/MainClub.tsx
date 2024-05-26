import pb from '@/api/pocketbase';
import { MainButton, NomalTitle, SkipToContent } from '@/components/Atoms';
import { ClubCard, GNB, MainKindToggle } from '@/components/Molecules';
import { useLoaderData } from '@/hooks';
import { Texpand, Texpand2, getClubListQueryOption } from '@/pages/MainClub';
import useSearchParamsStore, {
  combineParams,
} from '@/store/useSearchParamsStore';
import {
  Collections,
  SocialingResponse,
  UsersResponse,
} from '@/types/pocketbase-types';
import { getDocumentTitle } from '@/utils';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useInView } from 'react-intersection-observer';
import { Outlet, useNavigate, useSearchParams } from 'react-router-dom';
import { Sort } from '../Sort';

interface Tloader {
  userInfo: UsersResponse<Texpand2>;
  clubData: SocialingResponse<Texpand>[];
}
export function MainClub() {
  const { userInfo, clubData: loadedClubList } = useLoaderData<Tloader>();
  const [sortModalState, setSortModalState] = useState(false);

  const navigate = useNavigate();
  const newSearchParams = useSearchParamsStore(combineParams);

  const handleSubmitButton = () => {
    navigate(newSearchParams, { replace: true });
    setSortModalState(false);
  };

  const [searchParams] = useSearchParams();

  const filters = searchParams.get('filter');
  const sort = searchParams.get('sort');

  const {
    data: cachedClubList,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery({
    ...getClubListQueryOption(filters, sort, 10, loadedClubList),
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

  const handleSortModal = () => {
    if (sortModalState) {
      setSortModalState(false);
    } else {
      setSortModalState(true);
    }
  };

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('모임')}</title>
      </Helmet>
      <Outlet />
      <div className="relative flex min-h-svh w-full flex-col">
        <SkipToContent id="GNB"> gnb로 이동하기</SkipToContent>
        <NomalTitle>북적북적</NomalTitle>
        <MainKindToggle />
        <section className="flex items-center justify-center gap-4 px-4 py-4">
          <MainButton
            size="sm"
            color="secondary"
            onClick={handleSortModal}
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
                  userInfo={userInfo ?? nowUser}
                />
              );
            })}
            <li role="none" ref={ref}></li>
          </ul>
        </main>
        <GNB createClub className="fixed" />
      </div>
      <Sort
        handleSortModal={handleSortModal}
        handleSubmit={handleSubmitButton}
        isOpen={sortModalState}
      />
    </>
  );
}
