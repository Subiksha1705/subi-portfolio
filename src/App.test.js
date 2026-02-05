import { render } from '@testing-library/react';
import App from './App';

test('renders app root', () => {
  render(<App />);
  expect(document.querySelector('.App')).toBeInTheDocument();
});
