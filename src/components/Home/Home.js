import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';

const StyledHome = styled.div`
  h1 {
    text-align: center;
  }
`;

const StyledPlus = styled.div`
  width: 17px;
  display: inline-block;
  padding-left: 4px;

  path {
    fill: salmon;
  }
`;

function Home() {
  return (
    <StyledHome>
      <h1>
        My Projects
        <StyledPlus>
          <Plus />
        </StyledPlus>
      </h1>
    </StyledHome>
  );
}

export default Home;
