import pb from '@/api/pocketbase';
import { CheckboxForm, MainButton, NomalTitle } from '@/components/Atoms';
import { getDocumentTitle } from '@/utils';
// import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Form, useLoaderData } from 'react-router-dom';

export async function loader() {
  const filters = await pb.collection('genres').getFullList();
  return filters;
}

function FilterList() {
  const filterList = useLoaderData();
  console.log(filterList);
  return filterList.map(({ id, title }) => {
    return (
      <li key={id}>
        <CheckboxForm className="h-[64px]" id={id}>
          {title}
        </CheckboxForm>
      </li>
    );
  });
}

function Filter() {
  // const FILTER_CHECK = {};
  // const [checkState, updateCheckState] = useState({ FILTER_CHECK });

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('모임필터')}</title>
      </Helmet>
      <main>
        <Form method="get" action="/mainClub">
          <NomalTitle backButton textButton path="/mainClub">
            필터
          </NomalTitle>
          {/* <header className="flex justify-between p-4 ">
            <Link>
              <Svg width={16} height={16} id="arrow-left" />
            </Link>
            <h1 className="text-b-1-medium">카테고리</h1>
            <button tabIndex="1" type="reset">
              초기화
            </button>
          </header> */}
          <ul className="mx-4">
            <li>
              <CheckboxForm
                className="h-[64px]"
                id="selectAll"
                name="selectAll"
              >
                전체선택
              </CheckboxForm>
            </li>
            <FilterList />
          </ul>
          <MainButton as="button" type="submit">
            선택완료
          </MainButton>
        </Form>
      </main>
    </>
  );
}

export default Filter;
