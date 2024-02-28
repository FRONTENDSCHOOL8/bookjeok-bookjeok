import pb from '@/api/pocketbase';
import { NomalTitle, Svg } from '@/components/Atoms';
import { calcDay, getDocumentTitle, getPbImgs } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

function DetailClub() {
  const {
    active,
    applicant,
    createUser,
    dateTime,
    detail,
    isOffline,
    confirmUser,
    limitPerson,
    location,
    photo,
    title,
  } = useLoaderData();

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle(title)}</title>
      </Helmet>
      <NomalTitle backButton>모임 상세보기</NomalTitle>

      <img className="max-h-[264px]" src={photo} alt="" />

      <div className="flex justify-center gap-2">
        <span className="flex items-center text-b-3-light text-bjgray-500">
          <Svg width="16px" height="16px" id="pin" />
          {!isOffline ? '온라인' : location}
        </span>
        <span className="text-b-3-light text-bjgray-500">
          {calcDay(dateTime)}
        </span>
        <span className="flex items-center text-b-3-light text-bjgray-500">
          <Svg width="16px" height="16px" id="user" />
          {confirmUser.length}/{limitPerson}
        </span>
      </div>
      <div>
        {detail}
        {createUser}
        {applicant}
        {active}
      </div>
    </>
  );
}

export default DetailClub;

export async function loader({ params }) {
  const { clubId } = params;
  const club = await pb.collection('socialing').getOne(clubId);
  club.photo = getPbImgs(club);
  return club;
}
