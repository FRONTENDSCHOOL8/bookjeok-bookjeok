import { CheckboxForm } from '@/components/Atoms';
import useFilterStore from '@/store/useFilterStore';
import { useCallback } from 'react';
type TProps = {
  filterInfo: { id: string; title: string };
};
const FilterList = ({ filterInfo: { id, title } }: TProps) => {
  const { addFilter, removeFilter, filterList } = useFilterStore();

  const handleFilterCheckbox = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, checked } = e.target;
      if (checked) {
        addFilter(name);
      } else {
        removeFilter(name);
      }
    },
    [filterList]
  );

  return (
    <li key={id}>
      <CheckboxForm
        name={title}
        className="h-[64px]"
        id={id}
        onChange={handleFilterCheckbox}
        checked={filterList.includes(title)}
      >
        {title}
      </CheckboxForm>
    </li>
  );
};
export default FilterList;
