import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders dashboard with Total Income text', () => {
  render(<App />);
  const metricElement = screen.getByText(/Total Income/i);
  expect(metricElement).toBeInTheDocument();
});
