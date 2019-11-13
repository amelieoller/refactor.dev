import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInput = styled.div`
  position: relative;
  margin-top: 2.25rem;
  margin-bottom: 2.25rem;

  label {
    position: absolute;
    top: 0.65rem;
    pointer-events: none;
    padding-left: 0.13rem;
    z-index: 1;
    color: #b3b3b3;
    font-size: 1.5rem;
    font-weight: normal;
    transition: all 0.28s ease;

    .asterisk {
      color: #f25f5c;
      margin-left: 0.15rem;
    }
  }

  .bar {
    position: relative;
    border-bottom: 0.063em solid #999;
    display: block;

    &::before {
      content: '';
      height: 0.13rem;
      width: 0;
      left: 50%;
      bottom: -0.063rem;
      position: absolute;
      background: #247ba0;
      transition: left 0.28s ease, width 0.28s ease;
      z-index: 2;
    }
  }

  input {
    height: 1.8rem;
    display: block;
    background: none;
    padding: 0.13em 0.13em 0.063rem;
    font-size: 1.5rem;
    border-width: 0;
    border-color: transparent;
    line-height: 1.8;
    width: 100%;
    color: transparent;
    transition: all 0.28s ease;
    box-shadow: none;

    &:focus,
    &:valid,
    &.form-file,
    &.has-value {
      color: #50514f;

      & ~ label {
        font-size: 1rem;
        color: gray;
        top: -0.9rem;
        left: 0;
      }
    }

    &:focus {
      outline: none;

      & ~ label {
        color: #247ba0;
      }

      & ~ .bar::before {
        width: 100%;
        left: 0;
      }
    }
  }
`;

function Input({ placeholder, required, onChange, name, value }) {
  return (
    <StyledInput>
      <input
        type="text"
        onChange={onChange}
        name={name}
        value={value}
        required
      />
      <label htmlFor="input">
        {placeholder}
        {required && <span className="asterisk">*</span>}
      </label>
      <i className="bar"></i>
    </StyledInput>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool
};

Input.defaultProps = {
  required: false
};

export default Input;
