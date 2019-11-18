import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { firestore } from '../../../firebase';
import { ReactComponent as Trash } from '../../../assets/icons/trash.svg';
import { ReactComponent as Edit } from '../../../assets/icons/edit.svg';
import { ReactComponent as GitHub } from '../../../assets/icons/github.svg';
import { ReactComponent as Monitor } from '../../../assets/icons/monitor.svg';

const StyledProject = styled.div`
  background: white;
  color: #50514f;
  display: grid;
  grid-template-rows: 270px auto;
  border: 1px solid #c5c5c5;
  padding: 3.5rem;

  .project-image {
    background-image: ${props => `url(${props.image})`};
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    border-radius: 0.6rem 0.6rem 0px 0px;
  }

  .content {
    padding-top: 1.9rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .main {
      h3 {
        margin: 0;
        margin-bottom: 0.5rem;
        line-height: 3rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;

        a {
          text-decoration: none;
        }
      }

      p {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        margin: 1rem 0;
      }

      h3 {
        margin-bottom: 0.2rem;
        a {
          color: inherit;
        }
      }

      .tags {
        color: #aeaeae;
        font-style: italic;
      }
    }

    .footer {
      margin-top: 2rem;
      text-align: right;

      a {
        color: inherit;
        margin-left: 0.8rem;
      }

      svg {
        margin-left: 0.5rem;
        cursor: pointer;

        &:hover {
          color: #776eff;
        }
      }

      .button {
        margin-right: 0.3rem;
      }
    }
  }

  @media (max-width: 750px) {
    border: none;
  }
`;

const Project = ({ project, selectProject }) => {
  const handleDelete = id => {
    firestore.doc(`projects/${id}`).delete();
  };

  return (
    <StyledProject
      image={
        project.image
          ? project.image
          : 'https://res.cloudinary.com/dpekucrvb/image/upload/v1573953781/undraw_insert_block_efyb.svg'
      }
    >
      <div className="project-image"></div>
      <div className="content">
        <div className="main">
          <h3 onClick={() => selectProject(project)}>{project.title} </h3>
          <p>{project.description}</p>

          <div className="tags">
            {project.tags.map(tag => (
              <span key={tag}>{tag} · </span>
            ))}
          </div>
        </div>

        <div className="footer">
          {project.github && (
            <a target="_blank" rel="noopener noreferrer" href={project.github}>
              <GitHub />
            </a>
          )}
          {project.server && (
            <a target="_blank" rel="noopener noreferrer" href={project.live}>
              <Monitor />
            </a>
          )}
          <a href={`/projects/${project.id}/edit`}>
            <Edit />
          </a>
          <a
            onClick={() => {
              if (window.confirm('Are you sure?')) handleDelete(project.id);
            }}
          >
            <Trash />
          </a>
        </div>
      </div>
    </StyledProject>
  );
};

Project.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    folder: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  }),
  selectProject: PropTypes.func
};

export default Project;
