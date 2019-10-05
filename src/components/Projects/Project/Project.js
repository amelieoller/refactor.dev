import React from 'react';
import styled from 'styled-components';

const StyledProject = styled.div`
  background: #eaeaea;
  padding: 1em;
`;

function Project({ project }) {
  return (
    <StyledProject>
      <h2>{project.name}</h2>
      <p>{project.description}</p>
    </StyledProject>
  );
}

export default Project;
