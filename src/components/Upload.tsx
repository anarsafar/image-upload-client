import { Button, Flex, FormLabel, Image, Input, Text } from '@chakra-ui/react';
import { ConnectDropTarget } from 'react-dnd';
import dnd from '../assets/dnd.svg';
import UploadContainer from './UploadContainer';

interface Props {
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleButtonClick: () => void;
  borderStyle: string;
  drop: ConnectDropTarget;
  fileInputRef: React.MutableRefObject<HTMLInputElement | null>;
}

function Upload({
  handleFileChange,
  fileInputRef,
  handleButtonClick,
  drop,
  borderStyle,
}: Props): JSX.Element {
  return (
    <UploadContainer>
      <Text
        fontSize="18px"
        fontWeight="500"
        letterSpacing="-0.63px"
        color="#4F4F4F"
      >
        Upload your image
      </Text>
      <Text
        fontSize="10px"
        fontWeight="500"
        letterSpacing="-0.35px"
        color="#828282"
        mt="16px"
      >
        File should be Jpeg, Png,...
      </Text>
      <Flex
        border={borderStyle}
        w="100%"
        direction="column"
        align="center"
        justify="center"
        mt="30px"
        mb="18px"
        p="36px"
        borderRadius="12px"
        backgroundColor="#F6F8FB"
        ref={drop}
        cursor="move"
      >
        <Image src={dnd} alt="" w="120px" />
        <Text
          fontSize="12px"
          fontWeight="500"
          letterSpacing="-0.42px"
          color="#BDBDBD"
          mt="38px"
        >
          Drag & Drop your image here
        </Text>
      </Flex>
      <Text
        fontSize="10px"
        fontWeight="500"
        letterSpacing="-0.35px"
        mt="16px"
        color="#BDBDBD"
      >
        Or
      </Text>
      <Input
        type="file"
        name="image"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <FormLabel htmlFor="image">
        <Button
          colorScheme="blue"
          borderRadius="8px"
          backgroundColor="#2F80ED"
          fontFamily="noto"
          fontSize="12px"
          letterSpacing="-0.42px"
          fontWeight="500px"
          mt="21px"
          onClick={handleButtonClick}
          cursor="pointer"
        >
          Choose File
        </Button>
      </FormLabel>
    </UploadContainer>
  );
}

export default Upload;
