import pb from '@/api/pocketbase';
import { Badge, MainButton, NomalTitle, Svg } from '@/components/Atoms';
import { Avatar } from '@/components/Molecules';
import useUserInfoStore from '@/store/useUserInfoStore';
import { calcDay, getDocumentTitle, getPbImgs } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

function DetailClub() {
  const {
    title,
    photo,
    active,
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
  } = useLoaderData();
  const { userInfo } = useUserInfoStore();

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle(title)}</title>
      </Helmet>
      <div className="relative flex h-screen w-full flex-col ">
        <NomalTitle backLink path="/mainClub">
          모임 상세보기
        </NomalTitle>
        <main className="flex flex-1 flex-col pb-[96px]">
          <figure className="relative h-[274px] w-[430px] overflow-hidden">
            <img className="object-cover" src={photo} alt={title} />
            <Badge className="absolute left-2 top-2">
              {expand.genre.title}
            </Badge>
          </figure>

          <Avatar nickName={expand.createUser.nickname} text={title}></Avatar>

          <section className="bg-bjgray-50 flex h-full flex-col gap-4 px-4 pt-10">
            <div className="flex justify-center gap-2 pt-[63px] text-b-3-light text-bjgray-500">
              <span className="flex items-center">
                <Svg color="#9e9e9e" size={12} id="pin" />
                {!isOffline ? '온라인' : location}
              </span>
              <span className="flex items-center">
                <Svg color="#9e9e9e" size={12} id="calendar" />
                {calcDay(dateTime)}
              </span>
              <span className="flex items-center">
                <Svg color="#9e9e9e" size={12} id="user" />
                {confirmUser.length}/{limitPerson}
              </span>
            </div>
            <pre className=" whitespace-pre-wrap p-4 text-b-3-light text-bjblack">
              {detail}
            </pre>
          </section>
          <div>{active}</div>
        </main>
        <div className="fixed bottom-0 mx-auto w-full max-w-[430px] bg-white p-4">
          {userInfo.id === createUser ? (
            <MainButton className="w-full" to={`/managementClub/${id}`}>
              모임 관리하기
            </MainButton>
          ) : (
            <MainButton
              color="custom"
              className={`my-4 flex w-full items-center justify-center rounded-5xl text-b-1-medium focus:outline-none focus-visible:ring focus-visible:ring-bjblack/10 ${!applicant.includes(userInfo.id) ? 'bg-bjyellow-400 text-bjblack ' : 'pointer-events-none bg-bjgray-300 text-bjgray-500'}`}
              to={`/applicationClub/${id}`}
            >
              {applicant.includes(userInfo.id)
                ? '이미 신청한 모임입니다.'
                : '신청하기'}
            </MainButton>
          )}
        </div>
        {/* <GNB createClub className="fixed" /> */}
      </div>
    </>
  );
}

export default DetailClub;

export async function loader({ params }) {
  const { clubId } = params;
  const club = await pb
    .collection('socialing')
    .getOne(clubId, { expand: 'genre, createUser' });
  club.photo = getPbImgs(club);
  return club;
}
