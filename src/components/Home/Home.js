import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';
import Projects from '../Projects/Projects';
import Filter from '../Filter';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';

const StyledHome = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5rem;
    color: white;

    .left {
      h1 {
        font-size: 3rem;
        margin: 0;
      }
    }

    .right {
      svg {
        display: inline-block;
        height: 3rem;
        margin-left: 0.6rem;

        &:hover path {
          fill: #776eff;
        }

        &:hover {
          filter: drop-shadow(2px 2px 1px rgba(155, 67, 65, 0.15));
        }

        path {
          fill: #776eff6b;
        }
      }
    }

    @media (max-width: 650px) {
      margin: 3rem;
    }
  }
`;

function Home() {
  return (
    <StyledHome>
      <Header titleText="Project Keeper">
        <Link to="/new-project">
          <Plus />
        </Link>
      </Header>
      <Filter />
      <Projects />
    </StyledHome>
  );
}

export default Home;
