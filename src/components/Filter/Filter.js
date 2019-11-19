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
    border: 1px solid ${props => props.theme.primary};
    color: ${props => props.theme.primary};
    margin-right: 1rem;
    margin-bottom: 1rem;
    cursor: pointer;

    &.selected {
      background: ${props => props.theme.primary};
      color: white;
    }

    &:hover {
      background: ${props => props.theme.primaryDark};
      color: white;
    }
  }

  @media (max-width: 750px) {
    margin: 3rem;
  }
`;

const Filter = () => {
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
};

export default Filter;
