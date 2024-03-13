import { CheckboxForm } from '@/components/Atoms';
import useFilterStore from '@/store/useFilterStore';
import { string, object } from 'prop-types';
export default function FilterList({ filterInfo: { id, title } }) {
  const { addFilter, removeFilter, filterListState } = useFilterStore(
    (state) => ({
      addFilter: state.addFilter,
      removeFilter: state.removeFilter,
      filterListState: state.filterList,
    })
  );
  const handleFilterCheckbox = (e) => {
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
}

FilterList.propTypes = {
  filterInfo: object,
  id: string,
  title: string,
};
