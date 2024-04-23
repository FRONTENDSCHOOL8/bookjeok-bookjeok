import { useState, useEffect } from 'react';
interface UseDebounce<T extends object | string> {
  (value: T | undefined, delay: number): T | string;
}
const useDebounce: UseDebounce<any> = (value, delay) => {
  const initialValue = value || '';
  const positiveDelay = delay >= 0 ? delay : 0;
  const [debouncedValue, setDebouncedValue] = useState(initialValue);
  useEffect(() => {
    if (!value || delay < 0) {
      setDebouncedValue('');
      return;
    }
    const debounceTimer = setTimeout(() => {
      setDebouncedValue(value);
    }, positiveDelay);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [value, delay, positiveDelay]);
  return debouncedValue;
};
export default useDebounce;
