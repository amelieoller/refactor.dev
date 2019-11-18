import React from 'react';
import styled from 'styled-components';
import Project from '../Project';
import Button from '../../Button';

const StyledSingleProject = styled.div``;

const SingleProject = ({ project, selectProject }) => {
  return (
    <StyledSingleProject>
      <Button onClick={selectProject}>Remove Selection</Button>
      <Project project={project} />
    </StyledSingleProject>
  );
};

export default SingleProject;
