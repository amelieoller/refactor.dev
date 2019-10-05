import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';
import Projects from '../Projects/Projects';
import Title from '../Title';
import Filter from '../Filter';
import Sort from '../Sort';

const StyledHome = styled.div``;

function Home() {
  const projects = [
    {
      title: 'Project 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis blandit nisi, et auctor neque fermentum sit amet.',
      image: '',
      folder: '',
      github: '',
      id: 1
    },
    {
      title: 'Project 2',
      description:
        'Mauris cursus facilisis lorem, eget condimentum diam semper eu. Donec sem ligula, pretium id nulla eget, cursus congue eros. Nam volutpat vehicula mi eu maximus.',
      image: '',
      folder: '',
      github: '',
      id: 2
    }
  ];

  const tags = [
    { name: 'JavaScript', id: 1 },
    { name: 'Ruby', id: 2 },
    { name: 'React', id: 3 },
    { name: 'Redux', id: 4 },
    { name: 'Firebase', id: 5 },
    { name: 'Rails', id: 6 }
  ];

  return (
    <StyledHome>
      <Title titleText="My Projects" link="/new-project">
        <Plus />
      </Title>
      <Sort />
      <Filter tags={tags} />
      <Projects projects={projects} />
    </StyledHome>
  );
}

export default Home;
