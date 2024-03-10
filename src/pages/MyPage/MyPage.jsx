import {
  Accordion,
  NomalTitle,
  MainButton,
  RoundImage,
} from '@/components/Atoms';
import { ClubList, GNB } from '@/components/Molecules';
import { calcDay, getDocumentTitle, getPbImgs } from '@/utils';
import { Helmet } from 'react-helmet-async';
import useUserInfoStore from '@/store/useUserInfoStore';
import { useEffect, useState } from 'react';
import pb from '@/api/pocketbase';
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
/*
1. userInfo에 있는 createSocialing, participantSocialing 
  배열에 있는 모임 id를 어떻게 가져올까...
  그냥 confirmUser, createUser에 사용자 id 있음 다 가져오고 
  렌더링할때 creteSocialing에 모임 id가 있음 만든모임에 두고 confirm user에 있으면 참여한 모임으로 렌더링하구 

2. 로그아웃 기능 구현   
  useUserInfoStore에서 clearUserInfo
3. 프로필 사진 수정 기능 구현
4. GNB 고정
5. 독후감 
6. 로그아웃 버튼 클릭시 ->모달) 진짜?? 진짜 로그아웃할거야?? -> 웅 -> 로그아웃


*/
export function MyPage() {
  const { userInfo, clearUserInfo } = useUserInfoStore((state) => state);
  const [clubData, setClubData] = useState(null);
  // const [bookReviewData, setBookReviewData] = useState();
  const handleLogout = () => {
    clearUserInfo();
    pb.authStore.clear();
  };

  useEffect(() => {
    pb.collection('users')
      .getOne(`${userInfo.id}`, {
        expand: 'createSocialing, participantSocialing',
      })
      .then((data) => {
        console.log(data);
        setClubData(data.expand);
      })
      .catch((Error) => console.error(Error));
  }, [userInfo.id]);

  // useEffect(() => {
  //   pb.collection('bookReview')
  //     .getFullList({
  //       filter: `writer ="${userInfo.id}"`,
  //     })
  //     .then((data) => setBookReviewData(data));
  // }, [userInfo.id]);

  const { data: bookReviewData } = useQuery({
    queryFn: async () => {
      const fetchBookReview = await pb.collection('bookReview').getFullList({
        filter: `writer ="${userInfo.id}"`,
      });
      return fetchBookReview;
    },
    queryKey: ['bookReview', userInfo.id],
  });

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('마이페이지')}</title>
      </Helmet>
      <div className="relative flex h-screen w-full flex-col bg-white">
        <NomalTitle backLink path="/">
          마이페이지
        </NomalTitle>
        <main className="flex flex-col bg-white px-4">
          <div className="mb-5 mt-12 flex flex-col items-center gap-2">
            <RoundImage size="xlg" src={getPbImgs(userInfo)}></RoundImage>
            <p>{userInfo.nickname}</p>
          </div>
          <div className="flex gap-4">
            <MainButton
              to={`/editProfile/${userInfo.id}`}
              size="sm"
              color="secondary"
            >
              정보 수정
            </MainButton>
            <MainButton
              size="sm"
              color="secondary"
              type="button"
              onClick={handleLogout}
            >
              로그아웃
            </MainButton>
          </div>
          {clubData && (
            <>
              <Accordion open mainText="참여중인 모임" className="mb-4">
                <ul className="flex flex-col gap-y-4">
                  {clubData.participantSocialing.map((item) => (
                    <ClubList
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      schedule={calcDay(item.created)}
                      img={getPbImgs(item)}
                    />
                  ))}
                </ul>
              </Accordion>
              <Accordion open mainText="주최중인 모임" className="mb-4">
                <ul className="flex flex-col gap-y-4">
                  {clubData.createSocialing.map((item) => (
                    <ClubList
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      schedule={calcDay(item.created)}
                      img={getPbImgs(item)}
                    />
                  ))}
                </ul>
              </Accordion>
              <Accordion open mainText="내가 쓴 독후감">
                <ul className="flex flex-col gap-5 px-1">
                  {bookReviewData?.map((item) => (
                    <Link
                      className="boreder-b-1"
                      key={item.id}
                      to={`/mainBookReview/${item.id}`}
                    >
                      <div className="my-[7px] flex items-center gap-x-2">
                        <div>
                          <p className="line-clamp-1 text-b-0-regular text-bjblack">
                            {item.title}
                          </p>
                          <p className="line-clamp-2 text-b-2-regular text-bjgray-500">
                            {item.detail}
                          </p>
                        </div>
                        <div className="ml-auto shrink-0">
                          <img
                            src={getPbImgs(item)}
                            alt={item.title}
                            className="aspect-square w-[54px] rounded-4xl object-cover"
                          />
                        </div>
                      </div>
                    </Link>
                  ))}
                </ul>
              </Accordion>
            </>
          )}
        </main>
        <GNB createClub className="mt-auto" />
      </div>
    </>
  );
}
