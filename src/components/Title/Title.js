import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const StyledTitle = styled.div`
  /* h1 { */
    text-align: right;
    color: #247ba0;
    
    & > span {
      text-decoration: underline;
      text-decoration-color: #ffe066;
    }
  /* } */
`;

const StyledIcon = styled.div`
  width: 4rem;
  display: inline-block;
  padding-left: 0.1rem;

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
    fill: #ffdd91;
  }
`;

function Title({ titleText, children, link }) {
  return (
    <StyledTitle>
      {/* <h1> */}
        {/* <span>{titleText}</span> */}
        <Link to={link}>
          <StyledIcon>{children}</StyledIcon>
        </Link>
      {/* </h1> */}
    </StyledTitle>
  );
}

Title.propTypes = {
  titleText: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired
};

export default Title;
