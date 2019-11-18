import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import ProjectsProvider from './providers/ProjectsProvider';
import TagsProvider from './providers/TagsProvider';
import { ThemeProvider } from 'styled-components';
import theme from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ProjectsProvider>
      <TagsProvider>
        <App />
      </TagsProvider>
    </ProjectsProvider>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
