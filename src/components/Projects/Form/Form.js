import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Button from '../../Button';
import Input from './Input';
import { firestore } from '../../../firebase';
import { withRouter } from 'react-router-dom';
import Checkbox from './Checkbox/Checkbox';
import { TagsContext } from '../../../providers/TagsProvider';

const StyledForm = styled.div`
  position: relative;
  max-width: 40rem;
  margin: 5em auto;
  background: #fff;
  width: 100%;
  padding: 3em 5rem;
  border-radius: 3px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 4px 10px 1px rgba(0, 0, 0, 0.14),
      0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2);
    transform: scale(0.98);
    transition: transform 0.28s ease-in-out;
    z-index: -1;
  }
`;

const Form = ({ existingProject, history }) => {
  const { tags } = useContext(TagsContext);
  const initialProjectState = {
    title: '',
    description: '',
    github: '',
    folder: '',
    image: '',
    server: '',
    tags: []
  };

  const [project, setProject] = useState(initialProjectState);
  useEffect(() => {
    !!existingProject && setProject(existingProject);
  }, [existingProject]);

  const handleTagSelect = e => {
    const { name } = e.target;
    let newTags;

    if (project.tags.includes(name)) {
      const index = project.tags.indexOf(name);
      if (index !== -1) {
        newTags = project.tags.filter(t => t !== name);
      }
    } else {
      newTags = [...project.tags, name];
    }

    setProject({
      ...project,
      tags: newTags
    });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setProject({ ...project, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    history.push('/');

    project.id ? handleUpdate() : handleCreate();
  };

  const handleCreate = () => {
    firestore.collection('projects').add(project);
  };

  const handleUpdate = () => {
    firestore.doc(`projects/${project.id}`).update(project);
  };

  return (
    <StyledForm>
      <form onSubmit={handleSubmit}>
        <Input
          onChange={handleChange}
          value={project.title}
          name="title"
          placeholder="Title"
          required
        />
        <Input
          onChange={handleChange}
          value={project.description}
          name="description"
          placeholder="Description"
          required
        />
        <Input
          onChange={handleChange}
          value={project.github}
          name="github"
          placeholder="GitHub URL"
        />
        <Input
          onChange={handleChange}
          value={project.folder}
          name="folder"
          placeholder="Folder Name"
        />
        <Input
          onChange={handleChange}
          value={project.image}
          name="image"
          placeholder="Image"
        />
        <Input
          onChange={handleChange}
          value={project.server}
          name="server"
          placeholder="Server Command"
        />
        <div>
          {tags &&
            tags.map(tag => (
              <Checkbox
                key={tag.id}
                label={tag.name}
                checked={project.tags.includes(tag.name)}
                onChange={handleTagSelect}
                name={tag.name}
              />
            ))}
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </StyledForm>
  );
};

export default withRouter(Form);
