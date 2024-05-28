import pb from '@/api/pocketbase';
import { MainButton, NomalTitle, Svg } from '@/components/Atoms';
import { Loading } from '@/components/Common';
import { DobbleButtonModal } from '@/components/Molecules';
import useCreateClubStore from '@/store/useCreateClubStore';
import { createNumberArray, getDocumentTitle } from '@/utils';
import { useMutation } from '@tanstack/react-query';
import { useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';

type TdateTimeRef = {
  date: string | null;
  time: string | null;
};

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
  const dateTimeRef = useRef<TdateTimeRef>({
    date: null,
    time: null,
  });
  // ref에 저장된 date 및 time을 handler 함수에서 조합 및 전역 상태 업데이트
  const handleDate = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
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
  const handleTime = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
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
  const handleLimit = ({ target }: React.ChangeEvent<HTMLSelectElement>) => {
    setLimit(+target.value);
  };
  const handleQuery = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(target.value);
  };

  // 제출 후 모달표시를 위한 상태관리
  const [modalState, setModalState] = useState(false);

  const createNewClub = useMutation({
    mutationFn: async () => {
      await pb.collection('socialing').create(clubInfo);

      const user = await pb.collection('users').getOne(clubInfo.createUser!);
      const clubDataForUser = {
        createSocialing: [...user.createSocialing, `${clubInfo.id}`],
      };
      await pb
        .collection('users')
        .update(clubInfo.createUser!, clubDataForUser);

      const chattingRoomData = {
        title: clubInfo.title,
        socialing: clubInfo.id,
        users: clubInfo.createUser,
      };
      const newChattingRoom = await pb
        .collection('chattingRoom')
        .create(chattingRoomData);

      await pb
        .collection('socialing')
        .update(clubInfo.id!, { chattingRoom: newChattingRoom.id });
    },
  });

  // 모임 생성을 위한 생성버튼 handler (상태 id 업데이트 및 제출 후 초기화, user컬렉션에 모임 id 업데이트, socialing 컬렉션에 create, 모달 open을 위한 상태 업데이트 수행)
  const handleSubmitClubInfoForCreate = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    await createNewClub.mutateAsync();
    setModalState(true);
    await resetClubInfo();
  };
  if (createNewClub.isPending) {
    return <Loading />;
  }
  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('모임 만들기')}</title>
      </Helmet>
      <main className="flex min-h-svh flex-col justify-between">
        <div>
          <NomalTitle backLink subText="4 of 4">
            모임 만들기
          </NomalTitle>
          <div className="flex flex-col gap-6">
            <h2 className="p-4 text-h-2-semibold">모임을 소개해주세요.</h2>
            <div className="flex flex-col gap-7 px-4">
              <div>
                <div className="flex flex-col gap-3 border-b">
                  <label htmlFor="clubDate" className="text-b-1-medium">
                    언제 만날까요?
                  </label>
                  <input
                    id="clubDate"
                    type="date"
                    data-placeholder="날짜를 선택해주세요."
                    required
                    onChange={handleDate}
                    className="h-12"
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
                    className="h-12"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3 border-b">
                <label htmlFor="clubLimit" className="text-b-1-medium">
                  몇명을 모을까요?
                </label>
                <div className="flex items-center justify-between text-b-2-regular">
                  <div className="flex items-center gap-3">
                    <Svg id="user" size={16} />
                    참여인원 (3-15)
                  </div>
                  <select
                    id="clubLimit"
                    name="clubLimit"
                    className="mx-1 h-12 w-14 text-b-2-regular"
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
                <label htmlFor="clubQuery" className="text-b-1-medium">
                  모임을 신청할 때 답변할 질문을 작성해주세요.
                </label>
                <input
                  id="clubQuery"
                  name="clubQuery"
                  required
                  type="text"
                  className="h-12 w-full px-4 text-b-2-regular"
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
                primaryButtonPath="/main/club"
              >
                참가자들의 신청을 기다려볼까요?
              </DobbleButtonModal>
            ) : (
              ''
            )}
          </div>
        </div>
        <div className="p-4">
          <MainButton
            as="button"
            onClick={handleSubmitClubInfoForCreate}
            disabled={!clubInfo.dateTime || !clubInfo.query}
          >
            모임만들기
          </MainButton>
        </div>
      </main>
    </>
  );
}
