import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

const propsCSS = {
  outline: css`
    background-color: white;
    color: rgb(61, 100, 255);
    border: 1px solid rgb(61, 100, 255);
    &:hover {
      background-color: ${props => !props.disabled && 'rgb(43, 75, 191)'};
    }
    &:focus {
      background-color: ${props => !props.disabled && 'rgb(230, 230, 230)'};
    }
  `,
  disabled: css`
    background-color: ${props => (props.outline ? 'white' : 'rgb(230, 230, 230)')};
    border-color: rgb(230, 230, 230);
    color: ${props => (props.outline ? 'rgb(142, 142, 142)' : 'rgb(182, 182, 182)')};
    cursor: not-allowed;
  `
};

const StyledButton = styled.button`
  width: 200px;

  background: rgb(61, 100, 255);
  display: inline-block;
  justify-content: center;
  align-items: center;
  padding: 10px 0;
  outline: none;
  cursor: pointer;

  border-radius: 3px;
  border: ${props =>
    props.outline ? '1px solid rgb(43, 75, 191)' : '1px solid transparent'};

  font-size: 16px;
  letter-spacing: 0.5px;
  color: white;

  &:hover,
  &:focus {
    border: 1px solid rgb(43, 75, 191);
  }

  ${props => props.outline && propsCSS.outline};
  ${props => props.disabled && propsCSS.disabled};
`;

const Button = ({ children, disabled, ...props }) => {
  return (
    <StyledButton aria-disabled={disabled} disabled={disabled} {...props}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  /** Elements or text rendered inside button */
  children: PropTypes.node.isRequired,
  /** Gets called when the button is clicked */
  onClick: PropTypes.func,
  /** Sets the button's state and aria to `disabled` */
  disabled: PropTypes.bool,
  /** Render secondary button with inverted theme */
  outline: PropTypes.bool
};

Button.defaultProps = {
  disabled: false,
  outline: false,
  onClick: undefined
};

export default Button;
