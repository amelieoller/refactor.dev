import React from 'react';
import styled from 'styled-components';

const StyledSort = styled.div`
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

function Sort() {
  return (
    <StyledSort>
      <div className="title">SORT</div>
      <span className="badge">Date</span>
      <span className="badge">Updated</span>
    </StyledSort>
  );
}

export default Sort;
