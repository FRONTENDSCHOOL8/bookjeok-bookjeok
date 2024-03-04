import { NomalTitle } from '@/components/Atoms';
import { Avatar, GNB } from '@/components/Molecules';
import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function MyPage() {
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('마이페이지')}</title>
      </Helmet>
      <div className="relative flex h-screen w-full flex-col">
        <NomalTitle backLink path="/">
          마이페이지
        </NomalTitle>
        <div className="px-4">
          <div className="relative mb-5 mt-12">
            <Avatar
              nickName="닉네임"
              text="나의 활동"
              className="relative !top-0"
            ></Avatar>
          </div>
          <h2 className="border-b-[1px] border-[#767676] p-4 text-b-1-regular text-bjblack">
            모임
          </h2>
          <h3 className="p-4 pb-0 pt-5 text-b-1-regular text-bjblack">
            참여중인 모임
          </h3>
          <ul className="flex flex-col gap-y-4 py-4">
            <li>
              <Link>
                <div className="flex h-[100px] w-full flex-row overflow-hidden rounded-5xl bg-bjgray-100">
                  <div className="flex flex-grow flex-col justify-between p-3">
                    <p className="line-clamp-1 text-h-2-semibold leading-9 text-bjblack">
                      [2030 모임] 돈의 속성
                    </p>
                    <p className="text-b-3-light text-bjgray-500">
                      <span className="leading-9">3.16(토) 오후 2:00</span>
                    </p>
                  </div>
                  <div className="shrink-0 basis-20">
                    <img
                      src="https://shopping-phinf.pstatic.net/main_3244093/32440930635.20230516105639.jpg"
                      alt="돈의 속성"
                      className="w-full object-cover"
                    />
                  </div>
                </div>
              </Link>
            </li>
            <li>
              <Link>
                <div className="flex h-[100px] w-full flex-row overflow-hidden rounded-5xl bg-bjgray-100">
                  <div className="flex flex-grow flex-col justify-between p-3">
                    <p className="line-clamp-1 text-h-2-semibold leading-9 text-bjblack">
                      [2030 모임] 돈의 속성
                    </p>
                    <p className="text-b-3-light text-bjgray-500">
                      <span className="leading-9">3.16(토) 오후 2:00</span>
                    </p>
                  </div>
                  <div className="shrink-0 basis-20">
                    <img
                      src="https://shopping-phinf.pstatic.net/main_3244093/32440930635.20230516105639.jpg"
                      alt="돈의 속성"
                      className="w-full object-cover"
                    />
                  </div>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <GNB createClub />
    </>
  );
}

export default MyPage;
