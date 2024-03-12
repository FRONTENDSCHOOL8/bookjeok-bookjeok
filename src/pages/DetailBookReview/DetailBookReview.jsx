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
      <div className="flex min-h-svh flex-col">
        <NomalTitle backLink path="mainBookReview">
          독후감 상세보기
        </NomalTitle>
        <main className="flex flex-1 flex-col">
          <figure>
            <img
              className="aspect-[5/3] w-full object-cover"
              src={img}
              alt={title}
            />
          </figure>
          <section className="bg-bjgray-50 flex flex-1 flex-col gap-4 px-4 pb-20 shadow-inner">
            <Avatar
              nickName={expand.writer.nickname}
              src={expand.writer.img == '' ? null : getPbImgs(expand.writer)}
              text={title}
              className="-mt-14 shadow"
            ></Avatar>
            <div className="flex justify-center gap-2 text-b-2-medium text-bjgray-500">
              <span className="flex items-center">
                <Svg color="#9e9e9e" size={14} id="book" className="mr-[2px]" />
                {bookTitle}
              </span>
            </div>
            <pre className="whitespace-pre-wrap p-4 text-b-2-regular text-bjblack">
              {detail}
            </pre>
          </section>
        </main>
        <GNB createBookReview className="fixed" />
      </div>
    </>
  );
}
