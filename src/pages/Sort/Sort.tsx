import { CheckboxForm, MainButton } from '@/components/Atoms';
import { useNavigate } from 'react-router-dom';

const sortType = [
  { id: 'like', title: '좋아요 많은순' },
  { id: '-like', title: '좋아요 적은순' },
  { id: 'dateTime', title: '최신순' },
  { id: '-dateTime', title: '과거순' },
];

const Sort = () => {
  const navigate = useNavigate();

  const handleClickBG = (
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>
  ) => {
    e.preventDefault();
    navigate('..');
  };

  const handleSortType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const id = e.target.value;
    navigate(`/main/club?sort=${id}`, { state: { sort: id } });
  };

  return (
    <>
      <div
        onClick={handleClickBG}
        className="fixed top-0 z-[100] h-svh w-full max-w-[430px] bg-bjblack bg-opacity-90"
      />
      <dialog
        className="fixed bottom-0 z-[100] w-full max-w-[430px] overflow-hidden rounded-t-9xl bg-white px-4 "
        open={true}
      >
        <h2 className="pb-4 pt-[56px] text-h-1-semibold">정렬</h2>
        {sortType.map((i) => (
          <CheckboxForm
            type="radio"
            key={i.id}
            name="sort"
            onChange={handleSortType}
            className="h-16"
            id={i.id}
            value={i.id}
          >
            {i.title}
          </CheckboxForm>
        ))}
        <MainButton type="button" onClick={handleClickBG} className="mb-6">
          취소
        </MainButton>
      </dialog>
    </>
  );
};

export default Sort;
