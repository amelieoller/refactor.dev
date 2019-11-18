import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Home } from '../../../assets/icons/home.svg';
import Form from '../Form';
import Header from '../../Header';
import { Link } from 'react-router-dom';

const StyledNewProject = styled.div``;

const NewProject = () => (
  <StyledNewProject>
    <Header titleText="New Project">
      <Link to="/">
        <Home />
      </Link>
    </Header>
    <Form />
  </StyledNewProject>
);

export default NewProject;
