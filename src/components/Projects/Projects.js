import React, { useContext } from 'react';
import styled from 'styled-components';
import Project from './Project';
import PropTypes from 'prop-types';
import { ProjectsContext } from '../../providers/ProjectsProvider';

const StyledProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2rem;
  margin-top: 3rem;

  & > div {
    border-radius: 0.6rem;
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

Projects.propTypes = {};

export default Projects;
