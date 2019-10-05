import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';
import { Link } from 'react-router-dom';
import Projects from '../Projects/Projects';

const StyledHome = styled.div`
  h1 {
    text-align: center;
  }
`;

const StyledPlus = styled.div`
  width: 0.6em;
  display: inline-block;
  padding-left: 0.2em;

  svg {
    vertical-align: top;
  }

  path {
    fill: salmon;
  }
`;

function Home() {
  const projects = [
    {
      name: 'Project 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mattis blandit nisi, et auctor neque fermentum sit amet.',
      image: '',
      folder: '',
      github: '',
      id: 1
    },
    {
      name: 'Project 2',
      description:
        'Mauris cursus facilisis lorem, eget condimentum diam semper eu. Donec sem ligula, pretium id nulla eget, cursus congue eros. Nam volutpat vehicula mi eu maximus.',
      image: '',
      folder: '',
      github: '',
      id: 2
    }
  ];

  return (
    <StyledHome>
      <h1>
        My Projects
        <Link to={'/new-project'}>
          <StyledPlus>
            <Plus />
          </StyledPlus>
        </Link>
      </h1>
      <Projects projects={projects} />
    </StyledHome>
  );
}

export default Home;
