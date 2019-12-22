import React from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

import IconWithTooltip from '../../molecules/IconWithTooltip';

const StyledFooter = styled.div`
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

const Footer = ({ project: { github, live, id }, handleDelete, noAccess }) => (
  <StyledFooter className="footer">
    <div></div>
    <div>
      {github && (
        <IconWithTooltip
          tooltipText="Open in GitHub"
          iconName="github"
          linkTo={github}
          external
        />
      )}
      {live && (
        <IconWithTooltip
          tooltipText="Open Live Server"
          iconName="monitor"
          linkTo={live}
          external
        />
      )}
      {!noAccess && (
        <IconWithTooltip
          tooltipText="Edit Project"
          iconName="edit"
          linkTo={`/projects/${id}/edit`}
        />
      )}
      {!noAccess && (
        <IconWithTooltip
          tooltipText="Delete"
          iconName="trash"
          onClickFunc={() => {
            if (window.confirm('Are you sure?')) handleDelete(id);
          }}
        />
      )}
    </div>
    <ReactTooltip place="bottom" type="dark" effect="solid" />
  </StyledFooter>
);

export default Footer;
