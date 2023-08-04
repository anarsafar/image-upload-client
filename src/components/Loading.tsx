import { Progress, Text } from '@chakra-ui/react';
import UploadContainer from './UploadContainer';

function Loading(): JSX.Element {
  return (
    <UploadContainer>
      <Text
        fontSize="18px"
        fontWeight="500"
        lineHeight="27px"
        letterSpacing="-0.63px"
        color="#4F4F4F"
      >
        Uploading...
      </Text>
      <Progress mt="30px" size="sm" borderRadius="8px" isIndeterminate />
    </UploadContainer>
  );
}

export default Loading;
