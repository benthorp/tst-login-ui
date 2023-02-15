import { render, screen } from '@testing-library/react';
import LoginPage from './LoginPage';

describe('SCENARIO: Login page initial load', () => {
  describe('WHEN: Login page is rendered', () => {
    it('THEN: username input field is displayed', () => {
      render(<LoginPage />);

      const username = screen.getByRole('textbox', { name: 'Username' })
      expect(username.value).toBe('')
    });
    it('THEN: password input field is displayed', () => {
      render(<LoginPage />);

      const password = screen.getByLabelText('Password')
      expect(password.value).toBe('')
    });
    it('THEN: verify password input field is displayed', () => {
      render(<LoginPage />);

      const verifyPassword = screen.getByLabelText('Verify Password')
      expect(verifyPassword.value).toBe('')
    });
    it('THEN: Login button is displayed', () => {
      render(<LoginPage />);

      const loginButton = screen.getByRole('button', { name: /login/i })
      expect(loginButton).toBeInTheDocument()
    });
  });
});
