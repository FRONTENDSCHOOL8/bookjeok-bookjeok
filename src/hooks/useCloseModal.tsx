import { useEffect } from 'react';
interface CloseModalType {
  (isOpen: boolean, closeFn: () => void): void;
}

const useCloseModal: CloseModalType = (isOpen, closeFn) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent | React.KeyboardEvent): void => {
      if ('key' in e && e.key === 'Escape' && isOpen) {
        closeFn();
      }
    };

    const handleKeyDown = (e: KeyboardEvent | React.KeyboardEvent): void => {
      handleEsc(e);
    };

    document.addEventListener('keydown', handleKeyDown as EventListener);

    return () => {
      document.removeEventListener('keydown', handleKeyDown as EventListener);
    };
  }, [isOpen, closeFn]);
};

export default useCloseModal;
