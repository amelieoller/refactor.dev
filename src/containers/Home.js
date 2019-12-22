import React, { useContext } from 'react';

import Projects from '../components/Projects';
import Filter from '../components/Filter';
import { ProjectsContext } from '../providers/ProjectsProvider';

const Home = () => {
  const { projects } = useContext(ProjectsContext);

  return (
    <>
      <Filter />
      <Projects projects={projects} />
    </>
  );
};
export default Home;
