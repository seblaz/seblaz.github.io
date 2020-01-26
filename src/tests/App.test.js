import React from 'react';
import { render } from '@testing-library/react';
import App from 'app';

test('renders learn react link', () => {
  const { getAllByText } = render(<App />);
  const linkElement = getAllByText(/Seblaz/i)[0];
  expect(linkElement).toBeInTheDocument();
});