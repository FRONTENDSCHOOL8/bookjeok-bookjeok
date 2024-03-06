import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import pb from '@/api/pocketbase';
import { getPbImgs } from '@/utils';
import { NomalTitle, Svg } from '@/components/Atoms';
import { Avatar } from '@/components/Molecules';

function DetailBookReview() {
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
        <title>{getDocumentTitle('독후감 제목이 들어가야합니다!')}</title>
      </Helmet>
      <div className="relative flex h-screen w-full flex-col">
        <NomalTitle backLink path="/mainBookReview">
          독후감 상세보기
        </NomalTitle>
        <figure className="relative h-[274px] w-[430px] overflow-hidden">
          <img className="object-cover" src={img} alt={title} />
          {/* <Badge className="absolute left-2 top-2">{'Qfqw'}</Badge> */}
        </figure>
        <Avatar nickName={nickname} text={title}></Avatar>
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
      </div>
    </>
  );
}

export default DetailBookReview;

export async function loader({ params }) {
  const { bookreviewId } = params;
  const reviewInfo = await pb
    .collection('bookReview')
    .getOne(bookreviewId, { expand: 'writer, book_ISBN' });
  reviewInfo.img = getPbImgs(reviewInfo);
  return { reviewInfo };
}
