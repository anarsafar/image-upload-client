import { useToast } from '@chakra-ui/react';
import { useEffect } from 'react';
import useCustomRef from '../hooks/useCustomRef';
import useDnD from '../hooks/useDnD';
import useFileUpload from '../hooks/useFileUpload';
import Loading from './Loading';
import Result from './Result';
import Upload from './Upload';

function UIContainer(): JSX.Element {
  const toast = useToast();
  const { handleFileChange, isLoading, status, file } = useFileUpload();
  const { fileInputRef, handleButtonClick } = useCustomRef();
  const { drop, borderStyle } = useDnD(handleFileChange);

  useEffect(() => {
    if (status.error) {
      toast({
        position: 'top-right',
        duration: 2000,
        isClosable: true,
        status: 'error',
        description: status.error,
      });
    }
  }, [toast, status.error]);

  if (isLoading) return <Loading />;

  if (status.message) return <Result file={file} status={status} />;
  return (
    <Upload
      handleFileChange={handleFileChange}
      fileInputRef={fileInputRef}
      handleButtonClick={handleButtonClick}
      drop={drop}
      borderStyle={borderStyle}
    />
  );
}

export default UIContainer;
