import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    poppins: `'Poppins', sans-serif`,
    noto: `'Noto Sans', sans-serif`,
  },
  styles: {
    global: {
      body: {
        fontFamily: 'poppins',
        fontWeight: 'normal',
        lineHeight: 'normal',
        bg: '#FAFAFB',
      },
    },
  },
});

export default theme;
