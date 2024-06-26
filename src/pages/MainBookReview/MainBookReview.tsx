import { getDocumentTitle } from '@/utils';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Texpand } from '@/pages/MainBookReview';
import { queryClient } from '@/client/queryClient';
import { useDebounce, useLoaderData } from '@/hooks';
import { bookReviewQueryOption } from './queryOptions';
import { useInView } from 'react-intersection-observer';
import { useInfiniteQuery } from '@tanstack/react-query';
import { BookReviewResponse } from '@/types/pocketbase-types';
import { BookReviewList, GNB, MainKindToggle } from '@/components/Molecules';
import { fetchSearchBookReview } from '@/pages/MainBookReview/fetchBookReview';
import { NomalTitle, ThinTextForm, SkipToContent } from '@/components/Atoms';
interface Tloader {
  bookReview: BookReviewResponse<Texpand>[];
}
interface TsearchResult {
  resultArray: BookReviewResponse<Texpand>[];
}

export function MainBookReview() {
  const [ref, inView] = useInView();

  const cachedData = useLoaderData<Tloader>();
  const {
    data: bookReviewData,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    ...bookReviewQueryOption(10, cachedData),
  });

  const bookReviewList = bookReviewData
    ? bookReviewData.pages.flatMap((page) => page.items)
    : [];

  useEffect(() => {
    if (inView && !isSearchState) {
      fetchNextPage();
    }
  });

  // 검색창 이벤트 함수
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(e.target.value);
    setIsSearchState(e.target.value !== '');
  };

  const [isSearchState, setIsSearchState] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchResult, setSearchResult] = useState<TsearchResult>();
  const debouncedKeyword: string = useDebounce(searchKeyword, 500);

  //검색시 실행되는 이펙트 함수
  useEffect(() => {
    //전체 페이지가 페칭되지 않은 상태에서의 검색
    if (isSearchState && hasNextPage) {
      queryClient
        .fetchQuery({
          queryKey: ['bookTitleSearchResults'],
          queryFn: () => fetchSearchBookReview(debouncedKeyword),
        })
        .then((item) => {
          setSearchResult({ resultArray: item });
        });
    } else if (isSearchState && !hasNextPage) {
      const createValue = bookReviewList.filter((item) =>
        item['bookTitle'].includes(debouncedKeyword)
      );
      setSearchResult({ resultArray: createValue });
    }
  }, [cachedData, debouncedKeyword]);

  return (
    <>
      <SkipToContent id="GNB"> gnb로 이동하기</SkipToContent>
      <Helmet>
        <title>{getDocumentTitle('독후감')}</title>
      </Helmet>
      <div className="relative flex w-full flex-col">
        <NomalTitle>북적북적</NomalTitle>
        <main>
          <MainKindToggle />
          <div className="mb-16 px-4">
            <ThinTextForm
              onChange={handleSearch}
              type="search"
              searchIcon
              placeholder="책 제목을 입력해주세요"
              className="py-4"
            >
              검색
            </ThinTextForm>
            <ul className="py-2">
              {isSearchState
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
                : bookReviewList.map(
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
              <li role="none" ref={ref}></li>
            </ul>
          </div>
        </main>
        <GNB createBookReview className="fixed" />
      </div>
    </>
  );
}
