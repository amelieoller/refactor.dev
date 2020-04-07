import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Projects from '../components/Projects';
import { firestore } from '../firebase';
import { collectIdsAndData } from '../utils/utilities';

const StyledNoProjects = styled.div`
  text-align: center;
  padding: 4rem;
  background: ${({ theme }) => theme.transparentWhite};
  margin-top: 20vh;
  border: ${({ theme }) => theme.border};
  border-radius: ${({ theme }) => theme.sizes.borderRadius};
`;

const UserPortfolio = ({ location }) => {
  const [projects, setProjects] = useState(null);
  const [user, setUser] = useState(null);
  const [fetchingData, setFetchingData] = useState(true);
  let currentPath = location.pathname;

  useEffect(() => {
    firestore
      .doc(`/users/${currentPath.slice(1)}`)
      .get()
      .then(doc => {
        if (!doc.exists) {
          setFetchingData(false);
        } else {
          setUser(doc.data());

          firestore
            .collection('users')
            .doc(currentPath.slice(1))
            .collection('projects')
            .where('starred', '==', true)
            .get()
            .then(snapshot => {
              const projects = snapshot.docs.map(collectIdsAndData);
              setProjects(projects);
              setFetchingData(false);
            });
        }
      });
  }, [currentPath]);

  if (projects && projects.length !== 0) {
    return (
      <div>
        <h1>{user.displayName}'s Portfolio</h1>
        <Projects projects={projects} noAccess />
      </div>
    );
  } else if (!fetchingData) {
    return (
      <StyledNoProjects>
        <h1>No Projects Found</h1>
      </StyledNoProjects>
    );
  } else {
    return <div></div>;
  }
};

export default UserPortfolio;
