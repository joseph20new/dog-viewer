import { render, screen } from '@testing-library/react';
import DogList from './DogList';

test('renders learn react link', () => {
  render(<DogList />);
  const linkElement = screen.getByText(/I am Dog List/i);
  expect(linkElement).toBeInTheDocument();
});
