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
    if (status.error || status.message === 'Requested request not found') {
      toast({
        position: 'top-right',
        duration: 2000,
        isClosable: true,
        status: 'error',
        description: status.error ? status.error : 'Request not found',
      });
    }
  }, [toast, status.error, status.message]);

  if (isLoading) return <Loading />;

  if (status.message && status.message !== 'Requested request not found') {
    return <Result file={file} status={status} />;
  }

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
