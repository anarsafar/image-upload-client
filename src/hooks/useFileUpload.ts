import { useState } from 'react';

interface UploadResponse {
  error?: string;
  message?: string;
}

const useFileUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [status, setStatus] = useState<UploadResponse>({});
  const [isLoading, setLoading] = useState<boolean>(false);

  const uploadFile = async (selectedFile: File) => {
    setLoading(true);
    setStatus({});
    const formData = new FormData();
    formData.append('image', selectedFile);
    await fetch('http://localhost:8080/images/upload', {
      method: 'POST',
      body: formData,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setStatus(data);
      })
      .catch(() => {
        setLoading(false);
        setStatus({ error: 'Something went wrong' });
      });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
      uploadFile(event.target.files[0]);
    }
  };

  return { file, handleFileChange, status, isLoading, uploadFile };
};

export default useFileUpload;
