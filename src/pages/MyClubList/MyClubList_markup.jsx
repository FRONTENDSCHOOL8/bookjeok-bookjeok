import { NomalTitle, ThinTextForm } from '@/components/Atoms';
import { GNB } from '@/components/Molecules';
import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function MyClubList() {
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('나의 모임 리스트')}</title>
      </Helmet>

      <div className="relative flex h-screen w-full flex-col">
        <NomalTitle backLink path="/">
          모임 리스트
        </NomalTitle>
        <main className="px-4">
          <ThinTextForm
            type="search"
            searchIcon
            placeholder="search"
            className="my-2"
          >
            검색
          </ThinTextForm>
          <h2 className="pb-4 pl-4 pt-5 text-b-1-regular text-bjblack">
            참여중인 모임
          </h2>
          <ul className="flex flex-col gap-y-4">
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
          <button
            type="button"
            className="mx-auto mt-3 block px-5 text-b-1-light"
          >
            더보기
          </button>
          <h2 className="pb-4 pl-4 pt-5 text-b-1-regular text-bjblack">
            내가 만든 모임
          </h2>
          <ul className="flex flex-col gap-y-4">
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
        </main>
      </div>
      <GNB createClub />
    </>
  );
}

export default MyClubList;
