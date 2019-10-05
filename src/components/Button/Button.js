import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

const propsCSS = {
  outline: css`
    background-color: white;
    color: #70c1b3;
    border: 2px solid #70c1b3;

    &:hover {
      background-color: ${props => !props.disabled && '#70C1B3'};
      color: ${props => !props.disabled && 'white'};
    }
  `,

  disabled: css`
    background-color: ${props =>
      props.outline ? 'white' : 'rgb(230, 230, 230)'};
    border-color: rgb(230, 230, 230);
    color: ${props =>
      props.outline ? 'rgb(142, 142, 142)' : 'rgb(182, 182, 182)'};
    cursor: not-allowed;

    &:hover {
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
        0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
    }
  `
};

const StyledButton = styled.button`
  background: #70c1b3;
  display: inline-block;
  justify-content: center;
  align-items: center;
  outline: none;
  cursor: pointer;

  border-radius: 3px;
  border: ${props =>
    props.outline ? '2px solid rgb(43, 75, 191)' : '2px solid transparent'};

  font-size: 16px;
  letter-spacing: 0.5px;
  color: white;

  position: relative;
  margin: 1em 0;
  padding: 0.75em 3em;
  box-shadow: 0.28s ease;
  transition: background-color 0.28s ease, color 0.28s ease,
    box-shadow 0.28s ease;
  overflow: hidden;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
    0 1px 5px 0 rgba(0, 0, 0, 0.12);

  &:hover {
    box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
      0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.2);
  }

  &:active::before,
  &:focus::before {
    transition: transform 1.12s ease, opacity 0.28s ease 0.364s;
    transition: transform 1.12s ease, opacity 0.28s ease 0.364s;
    transform: translate(-50%, -50%) scale(1);
    opacity: 0;
  }

  ${props => props.outline && propsCSS.outline};
  ${props => props.disabled && propsCSS.disabled};
`;

const Button = ({ children, disabled, type, ...props }) => {
  return (
    <StyledButton
      aria-disabled={disabled}
      disabled={disabled}
      type={type}
      {...props}
    >
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
