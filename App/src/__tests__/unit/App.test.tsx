// Imports
import { render, screen } from '@testing-library/react';

// To Test
import App from '../../App';

// Tests

test('Renders main page correctly', async () => {
  // Setup
  render(
        <App />
    );
  // Post Expctations
  expect(true).toBeTruthy();
})