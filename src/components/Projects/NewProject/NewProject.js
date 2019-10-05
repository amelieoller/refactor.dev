import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Home } from '../../../assets/icons/home.svg';
import { Link } from 'react-router-dom';

const StyledNewProject = styled.div`
  h1 {
    text-align: center;
  }
`;

const StyledHome = styled.div`
  width: 0.6em;
  display: inline-block;
  padding-left: 0.2em;

  svg {
    vertical-align: top;
  }

  path {
    fill: salmon;
  }
`;

function NewProject() {
  return (
    <StyledNewProject>
      <h1>
        New Project
        <Link to={'/'}>
          <StyledHome>
            <Home />
          </StyledHome>
        </Link>
      </h1>
    </StyledNewProject>
  );
}

export default NewProject;
