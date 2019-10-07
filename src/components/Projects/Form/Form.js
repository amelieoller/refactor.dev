import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../../Button';
import Input from './Input';

const StyledForm = styled.div`
  position: relative;
  max-width: 40em;
  margin: 5em auto;
  background: #fff;
  width: 100%;
  padding: 3em 5em;
  border-radius: 3px;

  &::before {
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

class Form extends Component {
  state = {
    title: '',
    description: '',
    github: '',
    folder: '',
    image: '',
    server: ''
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <StyledForm>
        <form
          onSubmit={e => {
            e.preventDefault();
            const {
              title,
              description,
              folder,
              github,
              image,
              server
            } = e.target.elements;

            handleSubmit({
              title: title.value,
              description: description.value,
              folder: folder.value,
              github: github.value,
              image: image.value,
              server: server.value
            });
          }}
          data-testid="form"
        >
          <Input name="title" placeholder="Title" required />
          <Input name="description" placeholder="Description" required />
          <Input name="github" placeholder="GitHub URL" />
          <Input name="folder" placeholder="Folder Name" />
          <Input name="image" placeholder="Image" />
          <Input name="server" placeholder="Server Command" />
          <Button type="submit">Submit</Button>
        </form>
      </StyledForm>
    );
  }
}

export default Form;
