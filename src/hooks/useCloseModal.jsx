import { useEffect } from 'react';

const useCloseModal = (isOpen, closeFn) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.keyCode === 27 && isOpen) {
        closeFn();
      }
    };
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, closeFn]);
};
export default useCloseModal;
