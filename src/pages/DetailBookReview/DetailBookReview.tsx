import { NomalTitle, Svg } from '@/components/Atoms';
import { Avatar, GNB } from '@/components/Molecules';
import { getDocumentTitle, getPbImgs } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import { BookReviewResponse, UsersResponse } from '@/types/pocketbase-types';
import parse from 'html-react-parser';

type Texpand = {
  writer: UsersResponse;
};
export function DetailBookReview() {
  const { id, bookTitle, img, title, detail, expand } =
    useLoaderData() as BookReviewResponse<Texpand>;
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle(title)}</title>
      </Helmet>
      <div className="flex min-h-svh flex-col">
        <NomalTitle backLink path="main/bookReview" iconButton>
          독후감 상세보기
        </NomalTitle>
        <main className="flex flex-1 flex-col">
          <figure>
            <img
              className="aspect-[5/3] w-full object-cover brightness-75"
              src={img}
              alt={title}
            />
          </figure>
          <section className="flex flex-1 flex-col gap-4 bg-bjgray-50 px-4 pb-20 shadow-inner">
            <Avatar
              nickName={expand?.writer?.nickname}
              src={expand?.writer?.img == '' ? '' : getPbImgs(expand?.writer)}
              text={title}
              className="relative -mt-[58px]"
            ></Avatar>
            <div className="flex justify-center gap-2 text-b-2-medium text-bjgray-500">
              <span className="flex items-center">
                <Svg color="#9e9e9e" size={15} id="book" className="mr-1" />
                {bookTitle}
              </span>
            </div>
            <div className="px-6 py-4">
              <div className="text-b-2-regular text-bjgray-500">
                좋아요 100개
              </div>
              <pre className="my-2 whitespace-pre-wrap text-b-1-light text-bjblack">
                {parse(detail)}
              </pre>
              <Link
                to={`/bookReview/${id}/comments`}
                className="text-b-2-regular text-bjgray-500"
              >
                댓글 <span className="font-semibold">100</span>개 모두 보기
              </Link>
            </div>
          </section>
        </main>
        <GNB createBookReview className="fixed" />
        <Outlet />
      </div>
    </>
  );
}
