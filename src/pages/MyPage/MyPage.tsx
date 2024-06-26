import pb from '@/api/pocketbase';
import {
  Accordion,
  BlankContents,
  MainButton,
  NomalTitle,
  RoundImage,
} from '@/components/Atoms';
import {
  BookReviewList,
  ButtonModalForManageMent,
  ClubList,
  GNB,
} from '@/components/Molecules';
import useUserInfoStore from '@/store/useUserInfoStore';
import {
  BookReviewResponse,
  Collections,
  SocialingResponse,
  UsersResponse,
} from '@/types/pocketbase-types';
import { convertTime, getDocumentTitle, getPbImgs } from '@/utils';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

type Texpand = {
  participantSocialing?: SocialingResponse[];
  createSocialing?: SocialingResponse[];
  like?: SocialingResponse[];
};

Collections;
export function MyPage() {
  const { userInfo, clearUserInfo } = useUserInfoStore((state) => state);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: fetchAllUserInfo } = useQuery({
    queryFn: async () => {
      const fetchAllUserInfo = await pb
        .collection(Collections.Users)
        .getOne<UsersResponse<Texpand>>(`${userInfo!.id}`, {
          expand: 'createSocialing, participantSocialing, like',
        });
      return fetchAllUserInfo;
    },
    queryKey: ['clubInfo', userInfo!.id],
  });

  const { data: bookReviewData } = useQuery({
    queryFn: async (): Promise<BookReviewResponse[]> => {
      const fetchBookReview = await pb.collection('bookReview').getFullList({
        filter: `writer ="${userInfo!.id}"`,
      });
      return fetchBookReview;
    },
    queryKey: ['bookReview', userInfo!.id],
  });

  const handleLogout = () => {
    clearUserInfo();
    pb.authStore.clear();
  };
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
          <div className="mb-5 mt-12 flex flex-col items-center gap-2">
            <RoundImage
              size="xlg"
              src={getPbImgs(fetchAllUserInfo) || ''}
            ></RoundImage>
            <p>{userInfo!.nickname}</p>
          </div>
          <div className="mb-2 flex gap-4">
            <MainButton
              type="button"
              to="/editProfileMenu"
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
              <Accordion open mainText="좋아요 한 모임">
                <ul className="flex flex-col">
                  {fetchAllUserInfo?.expand?.like?.map((item) => (
                    <ClubList
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      schedule={convertTime(item.created, 1)}
                      img={getPbImgs(item)}
                    />
                  ))}
                </ul>
              </Accordion>
              <hr />
              {/* <Accordion open mainText="내가 만든 모임">
                <ul className="flex flex-col">
                  {fetchAllUserInfo?.expand?.createSocialing?.map((item) => (
                    <ClubList
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      schedule={convertTime(item.created, 1)}
                      img={getPbImgs(item)}
                    />
                  ))}
                </ul>
              </Accordion>
              <hr /> */}
              <Accordion className="mb-[100px]" open mainText="내가 쓴 독후감">
                <ul className="flex flex-col gap-2 px-1">
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
                              {parse(item.detail)}
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
