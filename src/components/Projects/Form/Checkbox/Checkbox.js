import React from 'react';
import styled from 'styled-components';

const StyledCheckbox = styled.div`
  margin-top: 3em;
  margin-bottom: 1em;

  label {
    position: relative;
    cursor: pointer;
    padding-left: 1.5em;
    text-align: left;
    color: #50514F;
    display: block;
    font-size: 1.5em;

    &:hover .helper {
      color: #70C1B3;
    }
  }

  input {
    width: auto;
    opacity: 0.00000001;
    position: absolute;
    left: 0;

    &:checked ~ .helper {
      color: #70C1B3;

      &,
      ::after,
      &::before {
        opacity: 1;
        transition: height 0.28s ease;
      }

      &::after {
        height: 0.5em;
      }

      &::before {
        height: 1.2em;
        transition-delay: 0.28s;
      }
    }
  }

  .helper {
    color: #999;
    position: absolute;
    top: 0;
    left: 0;
    width: 0.8em;
    height: 0.8em;
    z-index: 0;
    border: 0.125em solid currentColor;
    border-radius: 0.0625em;
    transition: border-color 0.28s ease;

    &::before,
    &::after {
      position: absolute;
      height: 0;
      width: 0.2em;
      background-color: #70C1B3;
      display: block;
      transform-origin: left top;
      border-radius: 0.25em;
      content: '';
      transition: opacity 0.28s ease, height 0s linear 0.28s;
      opacity: 0;
    }

    &::before {
      top: 0.65em;
      left: 0.38em;
      transform: rotate(-135deg);
      box-shadow: 0 0 0 0.0625em #fff;
    }
    &::after {
      top: 0.3em;
      left: 0;
      transform: rotate(-45deg);
    }
  }

  & + .checkbox {
    margin-top: 1em;
  }
`;

function Checkbox() {
  return (
    <StyledCheckbox>
      <label>
        <input type="checkbox" />
        <i className="helper"></i>I'm the label from a checkbox
      </label>
    </StyledCheckbox>
  );
}

export default Checkbox;
