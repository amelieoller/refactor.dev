import React from 'react';
import styled from 'styled-components';

const StyledCheckbox = styled.div`
  display: inline-block;
  margin-right: 0.6rem;

  label {
    position: relative;
    cursor: pointer;
    padding-left: 1.3rem;
    text-align: left;
    color: #50514f;
    display: block;
    font-size: 1.5rem;

    &:hover .helper {
      color: #70c1b3;
    }
  }

  input {
    width: auto;
    opacity: 0.00000001;
    position: absolute;
    left: 0;

    &:checked ~ .helper {
      color: #70c1b3;

      &,
      ::after,
      &::before {
        opacity: 1;
        transition: height 0.28s ease;
      }

      &::after {
        height: 0.5rem;
      }

      &::before {
        height: 1.2rem;
        transition-delay: 0.28s;
      }
    }
  }

  .helper {
    color: #999;
    position: absolute;
    top: 0;
    left: 0;
    width: 0.8rem;
    height: 0.8rem;
    z-index: 0;
    border: 0.125em solid currentColor;
    border-radius: 0.0625rem;
    transition: border-color 0.28s ease;

    &::before,
    &::after {
      position: absolute;
      height: 0;
      width: 0.2rem;
      background-color: #70c1b3;
      display: block;
      transform-origin: left top;
      border-radius: 0.25rem;
      content: '';
      transition: opacity 0.28s ease, height 0s linear 0.28s;
      opacity: 0;
    }

    &::before {
      top: 0.65rem;
      left: 0.38rem;
      transform: rotate(-135deg);
      box-shadow: 0 0 0 0.0625em #fff;
    }
    &::after {
      top: 0.3rem;
      left: 0;
      transform: rotate(-45deg);
    }
  }

  & + .checkbox {
    margin-top: 1rem;
  }
`;

function Checkbox(props) {
  return (
    <StyledCheckbox>
      <label>
        <input type="checkbox" {...props} />
        <i className="helper"></i>
        {props.name}
      </label>
    </StyledCheckbox>
  );
}

export default Checkbox;
