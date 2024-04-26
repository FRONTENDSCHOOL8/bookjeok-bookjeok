import {
  Accordion,
  NomalTitle,
  MainButton,
  RoundImage,
  BlankContents,
} from '@/components/Atoms';
import { useState } from 'react';
import pb from '@/api/pocketbase';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useQuery } from '@tanstack/react-query';
import {
  ClubList,
  GNB,
  ButtonModalForManageMent,
  BookReviewList,
} from '@/components/Molecules';
import useUserInfoStore from '@/store/useUserInfoStore';
import { calcDay, getDocumentTitle, getPbImgs } from '@/utils';
import {
  BookReviewResponse,
  UsersResponse,
  SocialingResponse,
  Collections,
} from '@/types/pocketbase-types';

type Texpand = {
  participantSocialing?: SocialingResponse[];
  createSocialing?: SocialingResponse[];
};
type Fetch = UsersResponse<Texpand>;
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
Collections;
export function MyPage() {
  const { userInfo, clearUserInfo } = useUserInfoStore((state) => state);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: fetchAllUserInfo } = useQuery({
    queryFn: async () => {
      const fetchAllUserInfo = await pb
        .collection(Collections.Users)
        .getOne<UsersResponse<Texpand>>(`${userInfo.id}`, {
          expand: 'createSocialing, participantSocialing',
        });
      return fetchAllUserInfo;
    },
    queryKey: ['clubInfo', userInfo.id],
  });

  const { data: bookReviewData } = useQuery({
    queryFn: async (): Promise<BookReviewResponse[]> => {
      const fetchBookReview = await pb.collection('bookReview').getFullList({
        filter: `writer ="${userInfo.id}"`,
      });
      return fetchBookReview;
    },
    queryKey: ['bookReview', userInfo.id],
  });

  const handleLogout = () => {
    clearUserInfo();
    pb.authStore.clear();
  };
  console.log(fetchAllUserInfo?.expand);
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('마이페이지')}</title>
      </Helmet>
      <div className="relative flex h-screen w-full flex-col bg-white">
        <NomalTitle backLink path="main/club">
          마이페이지
        </NomalTitle>
        <main className="flex flex-grow flex-col bg-white px-4">
          <div className="mb-5 mt-12 flex flex-col items-center  gap-2">
            <RoundImage
              size="xlg"
              src={fetchAllUserInfo && getPbImgs(fetchAllUserInfo)}
            ></RoundImage>
            <p>{userInfo.nickname}</p>
          </div>
          <div className="flex gap-4">
            <MainButton
              type="button"
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
              onClick={() => setIsModalOpen(true)}
            >
              로그아웃
            </MainButton>
          </div>
          {fetchAllUserInfo?.expand || BookReviewList.length === 0 ? (
            <>
              <Accordion open mainText="내가 신청한 모임" className="mb-4 mt-8">
                <ul className="flex flex-col gap-y-4">
                  {fetchAllUserInfo?.expand?.participantSocialing?.map(
                    (item) => (
                      <ClubList
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        schedule={calcDay(item.created)}
                        img={getPbImgs(item)}
                      />
                    )
                  )}
                </ul>
              </Accordion>
              <hr />
              <Accordion open mainText="내가 만든 모임" className="mb-4 mt-4">
                <ul className="flex flex-col gap-y-4">
                  {fetchAllUserInfo?.expand?.createSocialing?.map((item) => (
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
              <hr />
              <Accordion
                className="mb-[100px] mt-4"
                open
                mainText="내가 쓴 독후감"
              >
                <ul className=" flex flex-col gap-2 px-1">
                  {bookReviewData?.map((item) => (
                    <li
                      key={item.id}
                      className="border-t-[1px] border-bjgray-200 pt-2 first:border-0"
                    >
                      <Link
                        className="boreder-b-1"
                        to={`/bookReview/${item.id}`}
                      >
                        <div className="my-[7px] flex items-center gap-x-4">
                          <div>
                            <p className="line-clamp-1 text-b-0-regular text-bjblack">
                              {item.title}
                            </p>
                            <p className="mt-1 line-clamp-2 text-b-2-regular text-bjgray-500">
                              {item.detail}
                            </p>
                          </div>
                          <div className="ml-auto shrink-0">
                            <img
                              src={getPbImgs(item)}
                              alt={item.title}
                              className="aspect-square w-[70px] rounded-4xl border-[1px] border-bjgray-200 object-cover"
                            />
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Accordion>
            </>
          ) : (
            <BlankContents
              title="아무런 활동이 없으시네요..."
              description="북적북적에서 독후감을 기록하고,
            다른 사람과 함께 생각을 공유해보세요 !"
            />
          )}
        </main>
        <ButtonModalForManageMent
          svgId="logo"
          title="로그아웃 하시겠습니까?"
          open={isModalOpen}
          closeButton
          onClickCancel={() => setIsModalOpen(false)}
          primaryButtonText="로그아웃하기"
          primaryAs="button"
          primaryOnClick={handleLogout}
        >
          북적북적을 이용하려면 로그인이 필요합니다.
        </ButtonModalForManageMent>
      </div>

      <GNB createClub className="fixed"></GNB>
    </>
  );
}
