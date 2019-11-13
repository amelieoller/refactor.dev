import React from 'react';
import styled from 'styled-components';

const StyledSort = styled.div`
  margin-bottom: 1.4rem;

  .title {
    font-size: 1.4rem;
    margin-bottom: 0.3rem;
  }

  .badge {
    display: inline-block;
    font-size: 1.2rem;
    border-radius: 1.5rem;
    padding: 0.2em 1rem;
    border: 1px solid #70c1b3;
    color: #70c1b3;
    margin-right: 0.28rem;
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
