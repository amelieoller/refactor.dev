import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TagsContext } from '../../providers/TagsProvider';
import { ProjectsContext } from '../../providers/ProjectsProvider';

const StyledFilter = styled.div`
  margin-bottom: 1.4rem;

  .title {
    font-size: 1.6rem;
    margin-bottom: 0.3rem;
    color: #fff;
  }

  .badge {
    display: inline-block;
    font-size: 1.4rem;
    border-radius: 1.5rem;
    padding: 0.2rem 1rem;
    border: 1px solid #70c1b3;
    color: #fff;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    cursor: pointer;

    &.selected {
      background: #70c1b3;
      color: white;
    }

    &:hover {
      background: #7fd1c3;
      color: white;
    }
  }
`;

function Filter() {
  const { tags } = useContext(TagsContext);
  const { updateFilter, filter } = useContext(ProjectsContext);

  return (
    <StyledFilter>
      {/* <div className="title">FILTER BY TAG</div> */}
      {tags.map(tag => (
        <span
          key={tag.id}
          className="badge"
          className={
            filter.tags.includes(tag.name) ? 'badge selected' : 'badge'
          }
          onClick={() => updateFilter('tags', tag.name)}
        >
          {tag.name}
        </span>
      ))}
    </StyledFilter>
  );
}

Filter.propTypes = {};

export default Filter;
