import pb from '@/api/pocketbase';
import { MainButton, NomalTitle, Svg } from '@/components/Atoms';
import { DobbleButtonModal } from '@/components/Molecules';
import useCreateClubStore from '@/store/useCreateClubStore';
import { createNumberArray, createRandomId, getDocumentTitle } from '@/utils';
import { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';

export function CreateClub4() {
  // zustand store 안의 상태 및 메서드 호출
  const { clubInfo, setLimit, setQuery, setDateTime, resetClubInfo } =
    useCreateClubStore((state) => ({
      clubInfo: state.clubInfo,
      setLimit: state.setLimit,
      setQuery: state.setQuery,
      setDateTime: state.setDateTime,
      resetClubInfo: state.resetClubInfo,
    }));

  // 입력받은 date 및 time을 ref에 임시 저장
  const dateTimeRef = useRef({
    date: null,
    time: null,
  });
  // ref에 저장된 date 및 time을 handler 함수에서 조합 및 전역 상태 업데이트
  const handleDate = ({ target }) => {
    dateTimeRef.current.date = target.value;
    if (
      dateTimeRef.current.date !== null &&
      dateTimeRef.current.time !== null
    ) {
      const { date, time } = dateTimeRef.current;
      const dateTimeString = `${date} ${time}`;
      const dateTime = new Date(dateTimeString).toISOString();
      setDateTime(dateTime);
    }
  };
  const handleTime = ({ target }) => {
    dateTimeRef.current.time = target.value;
    if (
      dateTimeRef.current.date !== null &&
      dateTimeRef.current.time !== null
    ) {
      const { date, time } = dateTimeRef.current;
      const dateTimeString = `${date} ${time}`;
      const dateTime = new Date(dateTimeString).toISOString();
      setDateTime(dateTime);
    }
  };

  // 인원 제한 및 질문 상태 업데이트
  const handleLimit = ({ target }) => {
    setLimit(target.value);
  };
  const handleQuery = ({ target }) => {
    setQuery(target.value);
  };

  // 제출 후 모달표시를 위한 상태관리
  const [modalState, setModalState] = useState(false);

  // 모임 생성을 위한 생성버튼 handler (상태 id 업데이트 및 제출 후 초기화, user컬렉션에 모임 id 업데이트, socialing 컬렉션에 create, 모달 open을 위한 상태 업데이트 수행)
  // const handleSubmitClubInfoForCreate = async (e) => {
  //   e.preventDefault();
  //   const user = await pb.collection('users').getOne(clubInfo.createUser);
  //   const clubDataForUser = {
  //     createSocialing: [...user.createSocialing, `${clubInfo.id}`],
  //   };
  //   await pb.collection('socialing').create(clubInfo);
  //   await pb.collection('users').update(clubInfo.createUser, clubDataForUser);
  //   await resetClubInfo();
  //   setModalState(true);
  // };
  const handleSubmitClubInfoForCreate = async (e) => {
    e.preventDefault();
    await pb.collection('socialing').create(clubInfo);
    const user = await pb.collection('users').getOne(clubInfo.createUser);
    const clubDataForUser = {
      createSocialing: [...user.createSocialing, `${clubInfo.id}`],
    };
    const chattingRoomId = createRandomId();
    await pb.collection('users').update(clubInfo.createUser, clubDataForUser);
    const chattingRoomData = {
      id: chattingRoomId,
      socialingtitle: clubInfo.title,
      socialingName: clubInfo.id,
      user: clubInfo.createUser,
    };
    await pb.collection('chattingRoom').create(chattingRoomData);
    await pb
      .collection('socialing')
      .update(clubInfo.id, { chattingRoom: chattingRoomId });
    setModalState(true);
    await resetClubInfo();
  };
  console.log(clubInfo);
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('모임 만들기')}</title>
      </Helmet>
      <main className="flex h-svh flex-col justify-between px-4">
        <div className="flex flex-col gap-6">
          <NomalTitle backLink subText="4 of 4">
            모임 만들기
          </NomalTitle>
          <h2 className="p-4 text-h-2-semibold">모임을 소개해주세요.</h2>
          <div className="flex flex-col gap-7 px-4">
            <div className="flex flex-col gap-3 border-b">
              <label htmlFor="clubDate" className="text-b-1-regular">
                언제 만날까요?
              </label>
              <input
                id="clubDate"
                type="date"
                data-placeholder="날짜를 선택해주세요."
                required
                onChange={handleDate}
              />
            </div>
            <div className="flex flex-col gap-3 border-b">
              <label htmlFor="clubTime"></label>
              <input
                id="clubTime"
                type="time"
                data-placeholder="시간을 선택해주세요."
                required
                onChange={handleTime}
              />
            </div>
            <div className="flex flex-col gap-3 border-b">
              <label htmlFor="clubLimit" className="text-b-1-regular">
                몇명을 모을까요?
              </label>
              <div className="flex items-center justify-between text-b-2-regular">
                <div className="flex items-center gap-2">
                  <Svg id="user" size={16} />
                  참여인원 (3-15)
                </div>
                <select
                  id="clubLimit"
                  name="clubLimit"
                  className="mx-1 w-14 text-b-2-regular"
                  required
                  onChange={handleLimit}
                >
                  <option value="" disabled>
                    참여인원(3-15)
                  </option>
                  {createNumberArray(3, 15).map((i) => (
                    <option key={i} value={i}>
                      {i}명
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-3 border-b">
              <label htmlFor="clubQuery" className="text-b-1-regular">
                모임을 신청할 때 답변할 질문을 작성해주세요.
              </label>
              <input
                id="clubQuery"
                name="clubQuery"
                required
                type="text"
                className="w-full text-b-2-regular"
                placeholder="예시) 어떤 관심사를 가지고 계신가요?"
                onChange={handleQuery}
              ></input>
            </div>
          </div>
          {modalState ? (
            <DobbleButtonModal
              open
              svgId="logo"
              title="모임을 개설했습니다."
              primaryButtonText="홈으로"
              primaryButtonPath="/mainClub"
            >
              참가자들의 신청을 기다려볼까요?
            </DobbleButtonModal>
          ) : (
            ''
          )}
        </div>
        <div className="py-4">
          <MainButton
            as="button"
            onClick={handleSubmitClubInfoForCreate}
            disabled={!clubInfo.dateTime || !clubInfo.query}
          >
            다음
          </MainButton>
        </div>
      </main>
    </>
  );
}
