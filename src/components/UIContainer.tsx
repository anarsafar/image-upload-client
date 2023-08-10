import useCustomRef from '../hooks/useCustomRef';
import useDnD from '../hooks/useDnD';
import useFileUpload from '../hooks/useFileUpload';
import Loading from './Loading';
import Result from './Result';
import Upload from './Upload';

function UIContainer(): JSX.Element {
  const { handleFileChange, isLoading, status, file } = useFileUpload();
  const { fileInputRef, handleButtonClick } = useCustomRef();
  const { drop, borderStyle } = useDnD(handleFileChange);

  if (isLoading) return <Loading />;
  if (status.message) return <Result file={file} />;

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
