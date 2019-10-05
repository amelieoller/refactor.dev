import React from 'react';
import styled from 'styled-components';
import Button from '../../Button';
import Input from './Input';

const StyledForm = styled.div`
  .container {
    position: relative;
    max-width: 40em;
    margin: 5em auto;
    background: #fff;
    width: 100%;
    padding: 3em 5em;
    border-radius: 3px;
  }

  .container::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 4px 10px 1px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
    transform: scale(0.98);
    transition: transform 0.28s ease-in-out;
    z-index: -1;
  }
`;

function Form() {
  return (
    <StyledForm>
      <div className="container">
        <form>
          <Input placeholder="Title" required />
          <Input placeholder="Description" required />
          <Input placeholder="GitHub URL" />
          <Input placeholder="Folder Name" />
          <Input placeholder="Image" />
          <Input placeholder="Server Command" />
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </StyledForm>
  );
}

export default Form;
