import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import App from './App';
import theme from './theme/chakraTheme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ChakraProvider theme={theme}>
    <DndProvider backend={HTML5Backend}>
      <App />
    </DndProvider>
  </ChakraProvider>
);
