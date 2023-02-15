import { render, screen } from '@testing-library/react';
import App from './App';

describe('WHEN: root app component is loaded', () => {
  it('THEN: login page is displayed (as evidenced by presence of login button)', () => {
    render(<App />);

    const loginButton = screen.getByRole('button', { name: /login/i })
    expect(loginButton).toBeInTheDocument()
  });
});
