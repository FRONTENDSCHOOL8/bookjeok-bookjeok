import {
  MainButton,
  NomalTitle,
  OutlineButton,
  TextForm,
} from '@/components/Atoms';
import { getDocumentTitle } from '@/utils';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

function CreateClub1() {
  const DEFAULT_LOCATION = {
    location: 'online',
    placeName: '',
  };
  const [locationState, setLocationState] = useState(DEFAULT_LOCATION);
  console.log(locationState);

  const handleClickOnline = (e) => {
    e.preventDefault();
    setLocationState({
      ...locationState,
      location: 'online',
      placeName: '',
    });
  };
  const handleClickOffline = (e) => {
    e.preventDefault();
    setLocationState({ ...locationState, location: 'offline' });
  };
  const handlePlaceName = (e) => {
    setLocationState({ ...locationState, placeName: e.target.value });
  };

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('모임 만들기')}</title>
      </Helmet>
      <NomalTitle backLink subText="1 of 4">
        모임 만들기
      </NomalTitle>
      <h2 className="p-4 text-h-2-semibold">어디서 만날까요?</h2>
      <main className="flex flex-col px-4">
        <div className="flex flex-col gap-4">
          <OutlineButton
            as="button"
            type="button"
            onClick={handleClickOnline}
            clicked={locationState.location === 'online'}
          >
            온라인
          </OutlineButton>
          <OutlineButton
            as="button"
            type="button"
            onClick={handleClickOffline}
            clicked={locationState.location === 'offline'}
          >
            오프라인
          </OutlineButton>
          {locationState.location === 'offline' ? (
            <TextForm
              svgId="pin"
              placeholder="장소를 입력해주세요. (필수)"
              required
              value={locationState.placeName}
              onChange={handlePlaceName}
            />
          ) : (
            ''
          )}
        </div>
        <MainButton className="self-end">다음</MainButton>
      </main>
    </>
  );
}

export default CreateClub1;
