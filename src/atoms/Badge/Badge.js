import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledBadge = styled.span`
  display: inline-block;
  font-size: 1.4rem;
  border-radius: 0.3rem;
  padding: 0.2rem 1rem;
  cursor: pointer;
  border: 1px solid
    ${props => (props.isSelected ? props.theme.primaryDark : props.theme.lighterGrey)};
  color: ${props => (props.isSelected ? 'white' : props.theme.darkerGrey)};
  background: ${props =>
    props.isSelected ? props.theme.primary : props.theme.lightestGrey};
  /* border: 1px solid ${props => props.theme.primaryDark};
  color: ${props => props.theme.darkerGrey};
  background: ${props => props.theme.lightestGrey}; */

  &:hover {
    background: ${({ theme }) => theme.primary};
    border: 1px solid ${({ theme }) => theme.primaryDark};
    color: white;
  }
`;

const Badge = ({ badgeText, handleClick, isSelected, className }) => {
  return (
    <StyledBadge isSelected={isSelected} onClick={handleClick} className={className}>
      {badgeText}
    </StyledBadge>
  );
};

Badge.defaultProps = {
  isSelected: false
};

Badge.propTypes = {
  badgeText: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  isSelected: PropTypes.bool.isRequired,
  className: PropTypes.string
};

export default Badge;
