import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

function Filter({ tags }) {
  return (
    <StyledFilter>
      <div className="title">FILTER BY TAG</div>
      {tags.map(tag => (
        <span key={tag.id} className="badge">
          {tag.name}
        </span>
      ))}
    </StyledFilter>
  );
}

Filter.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })
  ).isRequired
};

export default Filter;
