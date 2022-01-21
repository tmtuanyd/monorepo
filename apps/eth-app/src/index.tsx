import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BaseMuiTheme } from './theme';
import { ThemeProvider } from '@mui/material/styles';

ReactDOM.render(
  <React.Fragment>
    <ThemeProvider theme={BaseMuiTheme}>
      <App />
    </ThemeProvider>
  </React.Fragment>,
  document.getElementById('root')
);
