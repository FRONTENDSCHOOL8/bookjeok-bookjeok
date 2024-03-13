import {
  MainButton,
  NomalTitle,
  OutlineButton,
  TextForm,
} from '@/components/Atoms';
import useCreateClubStore from '@/store/useCreateClubStore';
import useUserInfoStore from '@/store/useUserInfoStore';
import { getDocumentTitle } from '@/utils';
import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

export function CreateClub1() {
  const { clubInfo, setUserID, changeLocationType, addPlaceName } =
    useCreateClubStore((state) => ({
      clubInfo: state.clubInfo,
      setUserID: state.setUserId,
      changeLocationType: state.changeLocationType,
      addPlaceName: state.addPlaceName,
    }));

  const handleClickOnline = (e) => {
    e.preventDefault();
    changeLocationType(false);
  };
  const handleClickOffline = (e) => {
    e.preventDefault();
    changeLocationType(true);
  };
  const handlePlaceName = (e) => {
    addPlaceName(e.target.value);
  };

  const { userInfo } = useUserInfoStore((state) => ({
    userInfo: state.userInfo,
  }));

  useEffect(() => setUserID(userInfo.id), [setUserID, userInfo.id]);


  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('모임 만들기')}</title>
      </Helmet>
      <main className="flex min-h-svh flex-col justify-between">
        <div>
          <NomalTitle backLink path="mainClub" subText="1 of 4">
            모임 만들기
          </NomalTitle>
          <h2 className="p-4 text-h-2-semibold">어디서 만날까요?</h2>
          <div className="flex flex-col px-4">
            <div className="flex flex-col gap-4">
              <OutlineButton
                as="button"
                type="button"
                onClick={handleClickOnline}
                clicked={!clubInfo.isOffline}
              >
                온라인
              </OutlineButton>
              <OutlineButton
                as="button"
                type="button"
                onClick={handleClickOffline}
                clicked={clubInfo.isOffline}
              >
                오프라인
              </OutlineButton>
              {clubInfo.isOffline ? (
                <TextForm
                  svgId="pin"
                  placeholder="장소를 입력해주세요. (필수)"
                  required
                  value={clubInfo.location}
                  onChange={handlePlaceName}
                />
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
        <div className="px-4">
          <MainButton
            color="custom"
            className={`my-4 flex w-full items-center justify-center rounded-5xl text-b-1-medium ${!clubInfo.isOffline || clubInfo.location.length > 0 ? 'bg-bjyellow-400 text-bjblack ' : 'pointer-events-none bg-bjgray-300 text-bjgray-500'}`}
            to="/createClub2"
          >
            다음
          </MainButton>
        </div>
      </main>
    </>
  );
}
