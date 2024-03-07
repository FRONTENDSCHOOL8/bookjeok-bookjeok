import { NomalTitle, Svg } from '@/components/Atoms';
import { Avatar, GNB } from '@/components/Molecules';
import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

export function DetailBookReview() {
  const {
    reviewInfo: {
      bookTitle,
      img,
      title,
      detail,
      expand: {
        writer: { nickname },
      },
    },
  } = useLoaderData();
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle(title)}</title>
      </Helmet>
      <div className="relative flex h-screen w-full flex-col">
        <NomalTitle backLink path="mainBookReview">
          독후감 상세보기
        </NomalTitle>
        <figure className="relative h-[274px] w-[430px] overflow-hidden">
          <img className="object-cover" src={img} alt={title} />
        </figure>
        <Avatar nickName={nickname} text={title}></Avatar>
        <section className="flex h-full flex-col gap-4 bg-bjgray-50 px-4 pt-10">
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
