import { NomalTitle, Svg } from '@/components/Atoms';
import { Avatar, GNB } from '@/components/Molecules';
import { getDocumentTitle, getPbImgs } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

export function DetailBookReview() {
  const {
    reviewInfo: { bookTitle, img, title, detail, expand },
  } = useLoaderData();
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle(title)}</title>
      </Helmet>
      <div className="relative flex min-h-svh w-full flex-col">
        <NomalTitle backLink path="mainBookReview">
          독후감 상세보기
        </NomalTitle>
        <figure className="relative h-[274px] w-[430px] overflow-hidden">
          <img
            className="h-[274px] w-[430px] object-cover"
            src={img}
            alt={title}
          />
        </figure>
        <Avatar
          nickName={expand.writer.nickname}
          src={expand.writer.img == '' ? null : getPbImgs(expand.writer)}
          text={title}
        ></Avatar>
        <section className="bg-bjgray-50 flex h-full flex-col gap-4 px-4 pt-10">
          <div className="flex justify-center gap-2 pt-[63px] text-b-3-light text-bjgray-500">
            <span className="flex items-center">
              <Svg color="#9e9e9e" size={12} id="book" />
              {bookTitle}
            </span>
          </div>
          <pre className="whitespace-pre-wrap p-4 text-b-3-light text-bjblack">
            {detail}
          </pre>
        </section>
        <GNB createBookReview />
      </div>
    </>
  );
}
