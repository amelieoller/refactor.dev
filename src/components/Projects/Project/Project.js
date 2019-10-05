import React from 'react';
import styled from 'styled-components';
import placeholder from '../../../assets/images/placeholder.png';

const StyledProject = styled.div`
  background: white;
  color: #50514F;
  box-shadow: 0 4px 10px 1px rgba(0, 0, 0, 0.14),
    0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);

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
