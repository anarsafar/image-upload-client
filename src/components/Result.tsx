import { Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import UploadContainer from './UploadContainer';
import success from '../assets/success.svg';

interface ResultProp {
  file: File | null;
}

function Result({ file }: ResultProp): JSX.Element {
  return (
    <UploadContainer>
      <Box mb="7.5px">
        <Image src={success} />
      </Box>
      <Text
        fontSize="18px"
        fontWeight="500"
        letterSpacing="-0.63px"
        color="#4F4F4F"
        mb="25px"
      >
        Uploaded Successfully!
      </Text>
      <Box>
        {file && <Image borderRadius="12px" src={URL.createObjectURL(file)} />}
      </Box>
      <Flex
        width="100%"
        alignItems="center"
        justifyContent="space-between"
        mt="25px"
        padding="2px"
        backgroundColor="#F6F8FB"
        borderRadius="8px"
        border="1px solid #E0E0E0"
      >
        <Text
          fontSize="12px"
          fontWeight="500"
          letterSpacing="-0.28px"
          color="#4F4F4F"
          px="5px"
        >
          link...
        </Text>
        <Button
          borderRadius="8px"
          backgroundColor="#2F80ED"
          color="white"
          fontSize="12px"
          fontStyle="normal"
          fontWeight="500"
          lineHeight="normal"
          letterSpacing="-0.28px"
        >
          Copy Link
        </Button>
      </Flex>
    </UploadContainer>
  );
}

export default Result;
