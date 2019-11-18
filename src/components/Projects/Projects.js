import React, { useContext } from 'react';
import styled from 'styled-components';
import Project from './Project';
import { ProjectsContext } from '../../providers/ProjectsProvider';
import PropTypes from 'prop-types';

const StyledProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 5rem;
  margin-top: 4rem;

  @media (max-width: 750px) {
    grid-template-columns: 1fr;

    & > div {
      padding: 0 3rem;

      &:nth-child(odd) {
        padding: 3.5rem;
        background: ${props => props.theme.primaryBackground};

        .tags > span {
          color: white;
        }
      }
    }
  }
`;

const Projects = ({ selectProject }) => {
  const { projects } = useContext(ProjectsContext);

  return (
    <StyledProjects>
      {projects.map(project => (
        <Project key={project.id} project={project} selectProject={selectProject} />
      ))}
    </StyledProjects>
  );
};

Projects.propTypes = {
  selectProject: PropTypes.func.isRequired
};

export default Projects;
