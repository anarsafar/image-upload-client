import { Flex } from '@chakra-ui/react';

interface UploadContainerProps {
  children: React.ReactNode;
}

function UploadContainer({ children }: UploadContainerProps): JSX.Element {
  return (
    <Flex w="100wv" h="100vh" justify="center" align="center">
      <Flex
        backgroundColor="#fff"
        borderRadius="12px"
        px="32px"
        py="36px"
        flexDirection="column"
        justify="center"
        align="center"
        boxShadow="0px 4px 12px 0px rgba(0, 0, 0, 0.10)"
        w={{ sm: '400px' }}
      >
        {children}
      </Flex>
    </Flex>
  );
}

export default UploadContainer;
