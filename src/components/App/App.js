import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NewProject from '../Projects/NewProject';
import Home from '../Home';

const StyledApp = styled.div`
  padding: 2em;
`;

function App() {
  return (
    <Router>
      <StyledApp>
        <Route path="/" exact component={Home} />
        <Route path="/new-project" component={NewProject} />
      </StyledApp>
    </Router>
  );
}

export default App;
