import { render, screen } from '@testing-library/react';
import DogConatiner from './DogContainer';

test('renders learn react link', () => {
  render(<DogConatiner />);
  const linkElement = screen.getByText(/I am a Dog Conatainer/i);
  expect(linkElement).toBeInTheDocument();
});
