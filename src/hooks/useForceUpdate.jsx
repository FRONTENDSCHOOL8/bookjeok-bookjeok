import { useState } from 'react';

const useForceUpdate = () => {
  const [, setState] = useState(0);
  return () => setState((val) => val + 1);
};
export default useForceUpdate;
