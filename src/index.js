import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import './index.scss';
import UserProvider from './providers/UserProvider';
import theme from './theme';
import Authentication from './components/Authentication';

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <UserProvider>
        <Authentication />
      </UserProvider>
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
