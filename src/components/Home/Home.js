import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';
import Projects from '../Projects/Projects';
import Title from '../Title';
import Filter from '../Filter';
import Sort from '../Sort';

const StyledHome = styled.div``;

function Home() {
  return (
    <StyledHome>
      <Title titleText="My Projects" link="/new-project">
        <Plus />
      </Title>
      {/* <Sort /> */}
      <Filter />
      <Projects />
    </StyledHome>
  );
}

export default Home;
