import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Form from './Form';
const faker = require('faker');

test('calls onSubmit with the appropriate fields when submitted', () => {
  // Arrange
  const handleSubmit = jest.fn();
  const { getByTestId, getByLabelText, getByText } = render(
    <Form handleSubmit={handleSubmit} />
  );

  const fakeInput = {
    title: faker.lorem.word(),
    description: faker.lorem.paragraph(),
    github: faker.internet.url(),
    folder: faker.lorem.word(),
    image: faker.lorem.word(),
    server: faker.lorem.word()
  };

  const titleNode = getByLabelText(/title/i);
  const descriptionNode = getByLabelText(/description/i);
  const githubNode = getByLabelText(/github/i);
  const folderNode = getByLabelText(/folder/i);
  const imageNode = getByLabelText(/image/i);
  const serverNode = getByLabelText(/server/i);
  const submitButtonNode = getByText(/submit/i);
  const formNode = getByTestId('form');

  // Act
  titleNode.value = fakeInput.title;
  descriptionNode.value = fakeInput.description;
  githubNode.value = fakeInput.github;
  folderNode.value = fakeInput.folder;
  imageNode.value = fakeInput.image;
  serverNode.value = fakeInput.server;
  fireEvent.submit(formNode);

  // Assert
  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(handleSubmit).toHaveBeenCalledWith(fakeInput);
  expect(submitButtonNode.type).toBe('submit');
});

test('snapshot', () => {
  const { container } = render(<Form />);
  expect(container).toMatchSnapshot();
});
