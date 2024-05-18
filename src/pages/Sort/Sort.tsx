import { CheckboxForm, MainButton } from '@/components/Atoms';
import useSearchParamsStore, {
  combineParams,
} from '@/store/useSearchParamsStore';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';

interface Tsort {
  isOpen: boolean;
  handleSortModal: () => void;
  handleSubmit: () => void;
}
const sortType = [
  { id: 'like', title: '좋아요 많은순' },
  { id: '-like', title: '좋아요 적은순' },
  { id: 'dateTime', title: '과거순' },
  { id: '-dateTime', title: '미래순' },
];

const Sort = ({ isOpen, handleSortModal, handleSubmit }: Tsort) => {
  const { paramsList, setSort, resetSort } = useSearchParamsStore();
  const navigate = useNavigate();

  // 정렬 선택
  const handleSortType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const sortType = e.target.value;
    setSort(sortType);
  };

  // 리셋 버튼
  const handleResetButton = () => {
    const unsubscribe = useSearchParamsStore.subscribe((state) => {
      const newSearchParams = combineParams(state);
      navigate(newSearchParams);
      unsubscribe();
    });

    resetSort();
  };

  // 애니메이션
  gsap.registerPlugin(useGSAP);
  useGSAP(
    () => {
      if (isOpen) {
        gsap.to(
          '.modal',
          // { x: '100%', opacity: 0 },
          { y: '0', opacity: 1 }
        );
      } else {
        gsap.to('.modal', { y: '100%', opacity: 0 });
      }
    },
    { dependencies: [isOpen] }
  );

  return (
    <>
      {isOpen ? (
        <div
          onClick={handleSortModal}
          className="fixed top-0 z-[100] h-svh w-full max-w-[430px] bg-bjblack bg-opacity-90"
        />
      ) : null}
      <form className="modal fixed bottom-0 z-[100] w-full max-w-[430px] translate-y-[100%] overflow-hidden rounded-t-9xl bg-white px-4 ">
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
            checked={paramsList.sort === i.id}
          >
            {i.title}
          </CheckboxForm>
        ))}
        <div className="flex flex-row gap-2">
          <MainButton
            type="reset"
            color="secondary"
            onClick={handleResetButton}
            className="mb-6"
          >
            초기화
          </MainButton>
          <MainButton type="button" onClick={handleSubmit} className="mb-6">
            선택하기
          </MainButton>
        </div>
      </form>
    </>
  );
};

export default Sort;
