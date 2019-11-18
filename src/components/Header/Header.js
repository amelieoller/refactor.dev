import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHeader = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5rem;
    color: white;

    .left {
      h1 {
        font-size: 3rem;
        margin: 0;
        color: ${props => props.theme.primary}6b;
      }
    }

    .right {
      svg {
        display: inline-block;
        height: 3rem;
        margin-left: 0.6rem;

        &:hover path {
          fill: ${props => props.theme.primary};
        }

        &:hover {
          filter: drop-shadow(2px 2px 1px rgba(155, 67, 65, 0.15));
        }

        path {
          fill: ${props => props.theme.primary}6b;
        }
      }
    }

    @media (max-width: 750px) {
      margin: 3rem;
    }
  }
`;

const Header = ({ children, titleText }) => {
  return (
    <StyledHeader>
      <div className="header">
        <div className="left">
          <h1>{titleText}</h1>
        </div>
        <div className="right">{children}</div>
      </div>
    </StyledHeader>
  );
};

Header.propTypes = {
  titleText: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Header;
