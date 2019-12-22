import React, { useContext } from 'react';

import Projects from '../components/Projects';
import Filter from '../components/Filter';
import { UserContext } from '../providers/UserProvider';

const Home = () => {
  const { projects } = useContext(UserContext);

  return (
    <>
      <Filter />
      <Projects projects={projects} />
    </>
  );
};
export default Home;
