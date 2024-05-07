import { useDebounce } from '@/hooks';
import { getDocumentTitle } from '@/utils';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from '@/hooks';
import { NomalTitle, ThinTextForm } from '@/components/Atoms';
import { BookReviewList, GNB, MainKindToggle } from '@/components/Molecules';
import { BookReviewResponse } from '@/types/pocketbase-types';
import { Texpand } from '@/pages/MainBookReview';
import { useInfiniteQuery } from '@tanstack/react-query';
import { bookReviewQueryOption } from './queryOptions';
interface Tloader {
  bookReview: BookReviewResponse<Texpand>[];
}
interface TsearchResult {
  resultArray: BookReviewResponse<Texpand>[];
}

export function MainBookReview() {
  const data = useLoaderData<Tloader>();
  console.log(data);

  const { data: bookReviewData } = useInfiniteQuery({
    ...bookReviewQueryOption(10, data),
  });

  const bookReviewList = bookReviewData
    ? bookReviewData.pages.flatMap((page) => page.items)
    : [];

    
  // 검색창 이벤트 함수
  // const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSearchKeyword(e.target.value);
  //   setIsSearchState(e.target.value !== '');
  // };

  // const [isSearchState, setIsSearchState] = useState(false);
  // const [searchKeyword, setSearchKeyword] = useState('');
  // const [searchResult, setSearchResult] = useState<TsearchResult>();
  // const debouncedKeyword = useDebounce(searchKeyword, 500);

  //검색시 실행되는 이펙트 함수
  // useEffect(() => {
  //   const createValue = data.bookReview.filter((item) =>
  //     item['bookTitle'].includes(debouncedKeyword)
  //   );
  //   setSearchResult({ resultArray: createValue });
  // }, [data, debouncedKeyword]);

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('독후감')}</title>
      </Helmet>
      <div className="relative flex w-full flex-col">
        <NomalTitle>북적북적</NomalTitle>
        <main>
          <MainKindToggle />
          <div className="mb-16 px-4">
            <ThinTextForm
              // onChange={handleSearch}
              type="search"
              searchIcon
              placeholder="책 제목을 입력해주세요"
              className="py-4"
            >
              검색
            </ThinTextForm>
            <ul className="py-2">
              {/* {isSearchState
                ? searchResult?.resultArray.map(
                    ({
                      id,
                      title,
                      expand,
                      detail,
                      img,
                      created,
                      collectionId,
                    }) => {
                      if (expand) {
                        const {
                          writer: {
                            nickname,
                            collectionId: writerCollectionId,
                            id: writerID,
                            img: writerImg,
                          },
                        } = expand;
                        return (
                          <BookReviewList
                            id={id}
                            key={id}
                            title={title}
                            nickname={nickname}
                            writerCollectionId={writerCollectionId}
                            writerID={writerID}
                            writerImg={writerImg}
                            detail={detail}
                            img={img}
                            created={created}
                            collectionId={collectionId}
                          />
                        );
                      }
                    }
                  )
                :  */}
                {bookReviewList.map(
                    ({
                      id,
                      title,
                      expand,
                      detail,
                      img,
                      created,
                      collectionId,
                    }) => {
                      if (expand) {
                        const {
                          writer: {
                            nickname,
                            collectionId: writerCollectionId,
                            id: writerID,
                            img: writerImg,
                          },
                        } = expand;
                        return (
                          <BookReviewList
                            id={id}
                            key={id}
                            title={title}
                            nickname={nickname}
                            writerCollectionId={writerCollectionId}
                            writerID={writerID}
                            writerImg={writerImg}
                            detail={detail}
                            img={img}
                            created={created}
                            collectionId={collectionId}
                          />
                        );
                      }
                    }
                  )}
            </ul>
          </div>
        </main>
        <GNB createBookReview className="fixed" />
      </div>
    </>
  );
}
