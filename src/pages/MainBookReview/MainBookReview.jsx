import { useDebounce } from '@/hooks';
import { getDocumentTitle } from '@/utils';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import { NomalTitle, ThinTextForm } from '@/components/Atoms';
import { BookReviewList, GNB, MainKindToggle } from '@/components/Molecules';

export function MainBookReview() {
  const data = useLoaderData();

  // 검색창 이벤트 함수
  const handleSearch = (e) => {
    setSearchKeyword(e.target.value);
    setIsSearchState(e.target.value !== '');
  };

  const [isSearchState, setIsSearchState] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState();
  const [searchResult, setSearchResult] = useState();
  const debouncedKeyword = useDebounce(searchKeyword, 500);

  //검색시 실행되는 이펙트 함수
  useEffect(() => {
    const createValue = data.bookReview.filter((item) =>
      item['bookTitle'].includes(debouncedKeyword)
    );
    setSearchResult({ resultArray: createValue });
  }, [data, debouncedKeyword]);

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
                ? searchResult.resultArray.map(
                    ({
                      id,
                      title,
                      expand: {
                        writer: {
                          nickname,
                          collectionId: writerCollectionId,
                          id: writerID,
                          img: writerImg,
                        },
                      },
                      detail,
                      img,
                      created,
                      collectionId,
                    }) => (
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
                    )
                  )
                : data.bookReview.map(
                    ({
                      id,
                      title,
                      expand: {
                        writer: {
                          nickname,
                          collectionId: writerCollectionId,
                          id: writerID,
                          img: writerImg,
                        },
                      },
                      detail,
                      img,
                      created,
                      collectionId,
                    }) => (
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
                    )
                  )}
            </ul>
          </div>
        </main>
        <GNB createBookReview className="fixed" />
      </div>
    </>
  );
}
