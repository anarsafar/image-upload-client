import { useRef } from 'react';

const useCustomRef = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return { fileInputRef, handleButtonClick };
};

export default useCustomRef;
