import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Home } from '../../../assets/icons/home.svg';
import Form from '../Form';
import Title from '../../Title';

const StyledNewProject = styled.div``;

function NewProject() {
  return (
    <StyledNewProject>
      <Title titleText="New Project" link="/">
        <Home />
      </Title>
      <Form />
    </StyledNewProject>
  );
}

export default NewProject;
