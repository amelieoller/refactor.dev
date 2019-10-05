import React from 'react';
import styled from 'styled-components';
import Project from './Project';
import PropTypes from 'prop-types';

const StyledProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2em;
  margin-top: 3em;
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

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Projects;
