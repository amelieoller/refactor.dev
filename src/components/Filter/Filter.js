import React, { useContext } from 'react';
import styled from 'styled-components';
import { TagsContext } from '../../providers/TagsProvider';
import { ProjectsContext } from '../../providers/ProjectsProvider';

const StyledFilter = styled.div`
  margin-bottom: 1.4rem;

  .badge {
    display: inline-block;
    font-size: 1.4rem;
    border-radius: 0.3rem;
    padding: 0.2rem 1rem;
    border: 1px solid #776eff;
    color: #776eff;
    margin-right: 1rem;
    margin-bottom: 1rem;
    cursor: pointer;

    &.selected {
      background: #776eff;
      color: white;
    }

    &:hover {
      background: #675dfc;
      color: white;
    }
  }

  @media (max-width: 650px) {
    margin: 3rem;
  }
`;

function Filter() {
  const { tags } = useContext(TagsContext);
  const { updateFilter, filter } = useContext(ProjectsContext);

  return (
    <StyledFilter>
      {tags.map(tag => (
        <span
          key={tag.id}
          className="badge"
          className={filter.tags.includes(tag.name) ? 'badge selected' : 'badge'}
          onClick={() => updateFilter('tags', tag.name)}
        >
          {tag.name}
        </span>
      ))}
    </StyledFilter>
  );
}

export default Filter;
