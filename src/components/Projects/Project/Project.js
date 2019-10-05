import React from 'react';
import styled from 'styled-components';
import placeholder from '../../../assets/images/placeholder.png';

const StyledProject = styled.div`
  background: #eaeaea;
  color: #696969;

  img {
    object-fit: cover;
    width: 100%;
  }

  .content {
    padding: 1.4em;

    h2,
    p {
      margin: 0;
    }

    h2 {
      margin-bottom: 0.2em;
    }
  }
`;

function Project({ project }) {
  return (
    <StyledProject>
      <img src={placeholder} alt="" />
      <div className="content">
        <h2>{project.name}</h2>
        <p>{project.description}</p>
      </div>
    </StyledProject>
  );
}

export default Project;
