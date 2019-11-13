import React from 'react';
import styled from 'styled-components';
import placeholder from '../../../assets/images/placeholder.png';
import PropTypes from 'prop-types';
import { firestore } from '../../../firebase';

const StyledProject = styled.div`
  background: white;
  color: #50514f;
  box-shadow: 0 4px 10px 1px rgba(0, 0, 0, 0.14),
    0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-rows: 180px auto;

  .project-image {
    background-image: ${props => `url(${props.image})`};
    background-size: cover;
    position: relative;
    border-radius: 0.6rem 0.6rem 0px 0px;
  }

  .project-image::after {
    content: '';
    border-radius: 0.6rem 0.6rem 0px 0px;
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #9adce942;
  }

  .content {
    padding: 1.4rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .main {
      h3,
      p {
        margin: 0;
        margin-bottom: 0.5rem;
      }

      h3 {
        margin-bottom: 0.2rem;
        a {
          color: inherit;
        }
      }

      .tags {
        span {
          /* margin-right: 0.4rem; */
          font-style: italic;
          color: #aeaeae;
        }
      }
    }

    .footer {
      margin-top: 1rem;

      .button {
        margin-right: 0.3rem;
      }
    }
  }
`;

function Project({ project }) {
  const handleDelete = id => {
    // const { projects } = this.state;
    firestore.doc(`projects/${id}`).delete();

    // await firestore.doc(`projects/${id}`).delete();
    // const filteredProjects = projects.filter(project => project.id !== id);
    // this.setState({ projects: filteredProjects });
  };

  return (
    <StyledProject image={project.image ? project.image : placeholder}>
      <div className="project-image"></div>
      {/* <img src={project.image ? project.image : placeholder} alt="" /> */}
      <div className="content">
        <div className="main">
          <h3>
            <a target="_blank" href={project.github}>
              {project.title}
            </a>
          </h3>
          <p>{project.description}</p>

          <div className="tags">
            {project.tags.map(tag => (
              <span key={tag}>{tag} · </span>
            ))}
          </div>
        </div>

        <div className="footer">
          <a className="button primary" href={`/projects/${project.id}`}>
            Edit
          </a>

          <a
            className="button delete"
            onClick={() => {
              if (window.confirm('Are you sure?')) handleDelete(project.id);
            }}
          >
            Delete
          </a>
        </div>
      </div>
    </StyledProject>
  );
}

Project.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    folder: PropTypes.string.isRequired,
    github: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired
  })
};

export default Project;
