import { useState } from 'react';
import { LoaderType } from './loader';
import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import { ApplicationQuery } from './ApplicationClubQuery';
import { ApplicationTerms } from './ApplicationClubTerms';

export function ApplicationClub() {
  const { club, profilePhoto } = useLoaderData() as LoaderType;
  const [isTermsApprove, setIsTermsApprove] = useState(false);
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('모임 신청하기')}</title>
      </Helmet>
      {isTermsApprove ? (
        <ApplicationQuery club={club} profilePhoto={profilePhoto} />
      ) : (
        <ApplicationTerms nextpageFn={setIsTermsApprove} />
      )}
    </>
  );
}
