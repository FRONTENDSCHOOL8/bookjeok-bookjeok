import { NomalTitle, RoundImage, ThinTextForm } from '@/components/Atoms';
import { GNB, MainKindToggle } from '@/components/Molecules';
import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';

function MainBookReview() {
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('독후감')}</title>
      </Helmet>
      <div className="relative flex h-screen w-full flex-col">
        <NomalTitle>북적북적</NomalTitle>
        <MainKindToggle />
        <div className="px-4">
          <ThinTextForm
            type="search"
            searchIcon
            placeholder="search"
            className="py-2"
          >
            검색
          </ThinTextForm>
          <ul className="py-2">
            <li className="py-4">
              <Link>
                <div className="flex items-center gap-x-2">
                  <RoundImage
                    src="/public/defaultProfile.webp"
                    alt="alt"
                    size="sm"
                  ></RoundImage>
                  <span className="text-b-1-medium text-bjblack">
                    Erin Mango
                  </span>
                  <span className="ml-auto whitespace-nowrap text-b-2-regular text-bjgray-500">
                    1시간 전
                  </span>
                </div>
                <div className="my-[7px] flex items-center gap-x-2">
                  <div>
                    <p className="text-b-0-regular text-bjblack">
                      아이는 무엇으로 자라는가...
                    </p>
                    <p className="text-b-2-regular text-bjgray-500">
                      자녀가 있는 집에 이 책이 없다는 건 말이 되지 않는다
                      &lt;타임지&gt;
                    </p>
                  </div>
                  <div className="ml-auto shrink-0">
                    <img
                      src="/src/assets/temp.png"
                      alt=""
                      className="aspect-square w-[54px] rounded-4xl object-cover"
                    />
                  </div>
                </div>
              </Link>
            </li>
            <li className="py-4">
              <Link>
                <div className="flex items-center gap-x-2">
                  <RoundImage
                    src="/public/defaultProfile.webp"
                    alt="alt"
                    size="sm"
                  ></RoundImage>
                  <span className="text-b-1-medium text-bjblack">
                    Erin Mango
                  </span>
                  <span className="ml-auto whitespace-nowrap text-b-2-regular text-bjgray-500">
                    1시간 전
                  </span>
                </div>
                <div className="my-[7px] flex items-center gap-x-2">
                  <div>
                    <p className="text-b-0-regular text-bjblack">
                      아이는 무엇으로 자라는가...
                    </p>
                    <p className="text-b-2-regular text-bjgray-500">
                      자녀가 있는 집에 이 책이 없다는 건 말이 되지 않는다
                      &lt;타임지&gt;
                    </p>
                  </div>
                  <div className="ml-auto shrink-0">
                    <img
                      src="/src/assets/temp.png"
                      alt=""
                      className="aspect-square w-[54px] rounded-4xl object-cover"
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

export async function loader() {
  return '';
}
export default MainBookReview;
