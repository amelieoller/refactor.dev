import React, { Component } from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NewProject from '../Projects/NewProject';
import Home from '../Home';
import EditProject from '../Projects/EditProject';
import SingleProject from '../Projects/SingleProject';

const StyledApp = styled.div`
  padding: 5rem;

  @media (max-width: 750px) {
    padding: 0;
  }
`;

class App extends Component {
  render() {
    return (
      <Router>
        <StyledApp>
          <Route path="/" exact component={Home} />
          <Route path="/new-project" component={NewProject} />
          <Route path="/projects/:projectId" exact component={SingleProject} />
          <Route path="/projects/:projectId/edit" exact component={EditProject} />
        </StyledApp>
        <div id="background"></div>
      </Router>
    );
  }
}

export default App;
