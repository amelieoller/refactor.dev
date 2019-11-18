import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  display: inline-block;
  font-size: 1.4rem;
  border-radius: 0.3rem;
  padding: 0.6rem 1.4rem;
  border: 1px solid #776eff;
  color: #776eff;
  cursor: pointer;

  &.selected {
    background: #776eff;
    color: white;
  }

  &:hover {
    background: #675dfc;
    color: white;
  }
`;

const Button = ({ children, disabled, type, ...props }) => {
  return (
    <StyledButton aria-disabled={disabled} disabled={disabled} type={type} {...props}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  outline: PropTypes.bool
};

Button.defaultProps = {
  disabled: false,
  outline: false,
  onClick: undefined
};

export default Button;
