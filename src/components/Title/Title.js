import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';
import { Link } from 'react-router-dom';

const StyledTitle = styled.div`
  h1 {
    text-align: center;
    color: #247BA0;

    & > span {
      text-decoration: underline;
      text-decoration-color: #ffe066;
    }
  }
`;

const StyledIcon = styled.div`
  width: 0.6em;
  display: inline-block;
  padding-left: 0.1em;

  &:hover path {
    fill: #f67571;
  }

  &:hover svg {
    filter: drop-shadow(2px 2px 1px rgba(155, 67, 65, 0.15));
  }

  svg {
    vertical-align: top;
  }

  path {
    fill: #f25f5c;
  }
`;

function Title({ titleText, children, link }) {
  return (
    <StyledTitle>
      <h1>
        <span>{titleText}</span>
        <Link to={link}>
          <StyledIcon>{children}</StyledIcon>
        </Link>
      </h1>
    </StyledTitle>
  );
}

export default Title;
