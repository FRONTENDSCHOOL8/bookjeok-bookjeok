import { MainButton, NomalTitle, Svg } from '@/components/Atoms';
import useCreateClubStore from '@/store/useCreateClubStore';
import { getDocumentTitle } from '@/utils';
import { Helmet } from 'react-helmet-async';

function CreateClub4() {
  const { clubInfo, setDate, setTime, setLimit, setQuery } = useCreateClubStore(
    (state) => ({
      clubInfo: state.clubInfo,
      setDate: state.setDate,
      setTime: state.setTime,
      setLimit: state.setLimit,
      setQuery: state.setQuery,
    })
  );
  console.log(clubInfo);

  function createNumberArray(start, end) {
    const numbers = [];
    for (let i = start; i <= end; i++) {
      numbers.push(i);
    }
    return numbers;
  }
  const clubLimitNumber = createNumberArray(3, 15);

  const handleDate = ({ target }) => {
    setDate(target.value);
  };
  const handleTime = ({ target }) => {
    setTime(target.value);
  };
  const handleLimit = ({ target }) => {
    console.log(target.selectedOptions[0].label);
    setLimit(target.value);
  };
  const handleQuery = ({ target }) => {
    setQuery(target.value);
  };

  return (
    <>
      <Helmet>
        <title>{getDocumentTitle('모임 만들기')}</title>
      </Helmet>
      <main className="flex h-svh flex-col justify-between px-4">
        <form className="flex flex-col gap-6">
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
                  {clubLimitNumber.map((i) => (
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
        </form>
        <div>
          <MainButton
            color="custom"
            className={`my-4 flex w-full items-center justify-center rounded-5xl text-b-1-medium focus:outline-none focus-visible:ring focus-visible:ring-bjblack/10 ${!clubInfo ? 'pointer-events-none bg-bjgray-300 text-bjgray-500' : 'bg-bjyellow-400 text-bjblack'}`}
            to="/createClub4"
          >
            다음
          </MainButton>
        </div>
      </main>
    </>
  );
}

export default CreateClub4;
