import React from 'react';
import styled from 'styled-components';
import Button from '../Button';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import About from '../About';
import Home from '../Home';

const StyledApp = styled.div`
  padding: 2em;
`;

function App() {
  return (
    <Router>
      <StyledApp>
        <Button>Click Me!</Button>
        <Link to={'/about'}>About Page</Link>
        <Link to={'/'}>Home Page</Link>

        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
      </StyledApp>
    </Router>
  );
}

export default App;
