import { NomalTitle, ThinTextForm } from '@/components/Atoms';
import { BookReviewList, GNB, MainKindToggle } from '@/components/Molecules';
import { getDocumentTitle } from '@/utils';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';

export function MainBookReview() {
  const data = useLoaderData();
  console.log(data);

  // 검색창 이벤트 함수
  const handleSearch = (e) => {
    console.log(e.target.value);
    setSearchKeyword(e.target.value);
    setIsSearchState(e.target.value !== '');
  };

  const [isSearchState, setIsSearchState] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState();
  const [searchResult, setSearchResult] = useState();
  console.log(searchKeyword);
  console.log(isSearchState);

  //검색시 실행되는 이펙트 함수
  useEffect(() => {
    const createValue = data.bookReview.filter((item) =>
      item['title'].includes(searchKeyword)
    );
    setSearchResult({ resultArray: createValue });
  }, [data, searchKeyword]);

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('독후감')}</title>
      </Helmet>
      <div className="relative flex h-svh w-full flex-col">
        <NomalTitle>북적북적</NomalTitle>
        <MainKindToggle />
        <div className="px-4 pb-16">
          <ThinTextForm
            onChange={handleSearch}
            type="search"
            searchIcon
            placeholder="search"
            className="py-2"
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
        <GNB createBookReview className="fixed" />
      </div>
    </>
  );
}
