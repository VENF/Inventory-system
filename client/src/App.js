import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import './App.css';

import NewClient from './pages/NewClient';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NewClient />
    </ThemeProvider>
  );
}

export default App;
