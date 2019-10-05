import React from 'react';
import styled from 'styled-components';
import Project from './Project';

const StyledProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2em;
`;

function Projects({ projects }) {
  return (
    <StyledProjects>
      {projects.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </StyledProjects>
  );
}

export default Projects;
