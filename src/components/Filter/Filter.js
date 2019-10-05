import React from 'react';
import styled from 'styled-components';

const StyledFilter = styled.div`
  margin-bottom: 1.4em;

  .title {
    font-size: 1.4em;
    margin-bottom: 0.3em;
  }

  .badge {
    display: inline-block;
    font-size: 1.2em;
    border-radius: 1.5em;
    padding: 0.2em 1em;
    border: 1px solid #70c1b3;
    color: #70c1b3;
    margin-right: 0.28em;
    cursor: pointer;

    &:hover {
      background: #7fd1c3;
      color: white;
    }
  }
`;

function Filter() {
  return (
    <StyledFilter>
      <div className="title">FILTER BY TAG</div>
      <span className="badge">JavaScript</span>
      <span className="badge">Ruby</span>
      <span className="badge">React</span>
      <span className="badge">Redux</span>
      <span className="badge">Firebase</span>
      <span className="badge">Rails</span>
    </StyledFilter>
  );
}

export default Filter;
