import { NomalTitle, RoundImage, ThinTextForm } from '@/components/Atoms';
import { GNB } from '@/components/Molecules';
import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

export function ChatRoomList() {
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('채팅리스트')}</title>
      </Helmet>
      <div className="relative flex h-screen w-full flex-col">
        <NomalTitle backLink path="/">
          채팅리스트
        </NomalTitle>
        <div className="px-4">
          <ThinTextForm
            type="search"
            searchIcon
            placeholder="search"
            className="py-2"
          >
            검색
          </ThinTextForm>
          <ul>
            <li>
              <Link className="flex h-16 items-center gap-x-4">
                <RoundImage
                  src="/public/defaultProfile.webp"
                  alt="alt"
                  size="md"
                ></RoundImage>
                <span className="line-clamp-1 text-b-1-regular text-bjblack">
                  모임타이틀
                </span>
              </Link>
            </li>
            <li>
              <Link className="flex h-16 items-center gap-x-4">
                <RoundImage
                  src="/public/defaultProfile.webp"
                  alt="alt"
                  size="md"
                ></RoundImage>
                <span className="line-clamp-1 text-b-1-regular text-bjblack">
                  모임타이틀
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <GNB className="fixed" />
      </div>
    </>
  );
}
