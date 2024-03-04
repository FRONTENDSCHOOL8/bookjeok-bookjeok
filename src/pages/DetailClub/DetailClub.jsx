import pb from '@/api/pocketbase';
import { Badge, MainButton, NomalTitle, Svg } from '@/components/Atoms';
import { Avatar } from '@/components/Molecules';
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
    location,
    expand,
    id,
  } = useLoaderData();

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

          <section className="flex h-full flex-col gap-4 bg-bjgray-100 px-4">
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
            <pre>{detail}</pre>
          </section>
          <div>{active}</div>
        </main>
        <div className="fixed bottom-0 mx-auto w-full max-w-[430px] bg-white p-4">
          <MainButton className="w-full" to={`/applicationClub/${id}`}>
            신청하기
          </MainButton>
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
