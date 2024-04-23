import { CheckboxForm } from '@/components/Atoms';
import useFilterStore from '@/store/useFilterStore';
type TProps = {
  filterInfo: { id: string; title: string };
};
const FilterList = ({ filterInfo: { id, title } }: TProps) => {
  const { addFilter, removeFilter, filterListState } = useFilterStore(
    (state) => ({
      addFilter: state.addFilter,
      removeFilter: state.removeFilter,
      filterListState: state.filterList,
    })
  );
  const handleFilterCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    if (checked) {
      addFilter(name);
    } else {
      removeFilter(name);
    }
  };

  return (
    <li key={id}>
      <CheckboxForm
        name={title}
        className="h-[64px]"
        id={id}
        onChange={handleFilterCheckbox}
        checked={filterListState.includes(title)}
      >
        {title}
      </CheckboxForm>
    </li>
  );
};
export default FilterList;
