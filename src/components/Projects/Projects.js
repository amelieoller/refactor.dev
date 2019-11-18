import React, { useContext } from 'react';
import styled from 'styled-components';
import Project from './Project';
import { ProjectsContext } from '../../providers/ProjectsProvider';

const StyledProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 5rem;
  margin-top: 4rem;

  & > div {
    padding: 3.5rem;
  }

  @media (max-width: 650px) {
    & > div {
      padding: 0 3rem;

      &:nth-child(odd) {
        padding: 3.5rem;
        background: #ff5d5da6;
      }
    }
  }
`;

const Projects = () => {
  const { projects } = useContext(ProjectsContext);

  return (
    <StyledProjects>
      {projects.map(project => (
        <Project key={project.id} project={project} />
      ))}
    </StyledProjects>
  );
};

export default Projects;
