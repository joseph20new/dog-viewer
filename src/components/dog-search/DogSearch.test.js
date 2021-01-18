import { render, screen } from '@testing-library/react';
import DogSearch from './DogSearch';

test('renders learn react link', () => {
  render(<DogSearch />);
  const linkElement = screen.getByText(/I am a DogSearch/i);
  expect(linkElement).toBeInTheDocument();
});
