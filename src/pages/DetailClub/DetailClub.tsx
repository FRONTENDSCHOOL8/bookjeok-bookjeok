import { Badge, MainButton, NomalTitle, Svg } from '@/components/Atoms';
import { Avatar } from '@/components/Molecules';
import { useLoaderData } from '@/hooks';
import { Texpand, fetchDetailClub } from '@/pages/DetailClub';
import useUserInfoStore from '@/store/useUserInfoStore';
import { SocialingResponse } from '@/types/pocketbase-types';
import { calcDay, getDocumentTitle, getPbImgs } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { useLocation, useParams } from 'react-router-dom';

export function DetailClub() {
  const { clubId } = useParams();

  const initClubData = useLoaderData<SocialingResponse<Texpand>>();
  const { data: clubData } = useQuery({
    queryKey: ['detailClub', clubId],
    queryFn: () => fetchDetailClub(clubId!),
    initialData: initClubData,
  });

  const {
    title,
    photo,
    dateTime,
    detail,
    isOffline,
    confirmUser,
    limitPerson,
    applicant,
    createUser,
    location,
    expand,
    id,
  } = clubData;

  const { userInfo } = useUserInfoStore();
  const { pathname } = useLocation();
  const ogURL = `https://bookjeok-bookjeok.vercel.app/${pathname}`;

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle(title)}</title>
        <meta name="description" content={detail} />
        <meta property="og:site_name" content={getDocumentTitle(title)} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={detail} />
        <meta property="og:image" content={photo} />
        <meta property="og:url" content={ogURL} />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="flex min-h-svh flex-col">
        <NomalTitle backLink path="mainClub">
          모임 상세보기
        </NomalTitle>
        <main className="flex flex-1 flex-col pb-[96px]">
          <figure className="relative">
            <img
              className="aspect-[5/3] w-full object-cover brightness-75"
              src={photo}
              alt={title}
            />
            <Badge className="absolute left-2 top-2">
              {expand?.genre.title}
            </Badge>
          </figure>
          <section className="flex flex-1 flex-col gap-4 bg-bjgray-50 px-4 pb-4 shadow-inner">
            <Avatar
              nickName={expand?.createUser.nickname}
              src={
                expand?.createUser.img == ''
                  ? null
                  : getPbImgs(expand?.createUser)
              }
              text={title}
              className="relative -mt-[58px]"
            ></Avatar>
            <div className="flex flex-wrap justify-center gap-2 text-b-2-medium text-bjgray-500">
              <span className="flex items-center">
                <Svg color="#9e9e9e" size={15} id="pin" className="mr-1" />
                {!isOffline ? '온라인' : location}
              </span>
              <span className="flex items-center">
                <Svg color="#9e9e9e" size={15} id="calendar" className="mr-1" />
                {calcDay(dateTime)}
              </span>
              <span className="flex items-center">
                <Svg color="#9e9e9e" size={15} id="user" className="mr-1" />
                {confirmUser.length}/{limitPerson}
              </span>
            </div>
            <pre className="whitespace-pre-wrap p-4 px-6 text-b-1-light text-bjblack">
              {detail}
            </pre>
          </section>
        </main>
        <div className="fixed bottom-0 mx-auto w-full max-w-[430px] bg-white p-4">
          {userInfo.id === createUser ? (
            <MainButton className="w-full" to={`/managementClub/${id}`}>
              모임 관리하기
            </MainButton>
          ) : (
            <MainButton
              color="custom"
              className={`flex w-full items-center justify-center rounded-5xl text-b-1-medium ${!applicant.includes(userInfo.id) && !confirmUser.includes(userInfo.id) ? 'bg-bjyellow-400 text-bjblack ' : 'pointer-events-none bg-bjgray-300 text-bjgray-500'}`}
              to={`/applicationClub/${id}`}
            >
              {applicant.includes(userInfo.id) ||
              confirmUser.includes(userInfo.id)
                ? '이미 신청한 모임입니다.'
                : '신청하기'}
            </MainButton>
          )}
        </div>
      </div>
    </>
  );
}
