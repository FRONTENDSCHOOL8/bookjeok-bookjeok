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
          <div className="p-4">
            <MainButton as="button" type="submit">
              선택완료
            </MainButton>
          </div>
        </Form>
      </main>
    </>
  );
}

export default Filter;
