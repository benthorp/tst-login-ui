import { render, screen } from '@testing-library/react';
import LoginPage from './LoginPage';
import userEvent from '@testing-library/user-event';

describe('SCENARIO: Login page initial load', () => {
  describe('WHEN: Login page is rendered', () => {
    it('THEN: username input field is displayed with appropriate default value', () => {
      render(<LoginPage />);

      const username = screen.getByRole('textbox', { name: 'Username' })
      expect(username.value).toBe('')
    });
    it('THEN: password input field is displayed with appropriate default value', () => {
      render(<LoginPage />);

      const password = screen.getByLabelText('Password')
      expect(password.value).toBe('')
    });
    it('THEN: verify password input field is displayed with appropriate default value', () => {
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
describe('SCENARIO: Verify passwords match', () => {
  describe('WHEN: both password fields are blank', () => {
    it('THEN: validation message is not shown', async () => {
      render(<LoginPage />);
      const password = screen.getByLabelText('Password')
      const verifyPassword = screen.getByLabelText('Verify Password')

      await userEvent.clear(password);
      await userEvent.clear(verifyPassword);

      const validationMessage = screen.queryByText(/passwords match/i)
      expect(validationMessage).not.toBeInTheDocument()
    });
  });
  describe('WHEN: user types in Verify Password field', () => {
    describe('AND: passwords match', () => {
      it('THEN: validation message shows that passwords match', async () => {
        render(<LoginPage />);
        const password = screen.getByLabelText('Password')
        const verifyPassword = screen.getByLabelText('Verify Password')

        await userEvent.type(password, 'MatchingPassword');
        await userEvent.type(verifyPassword, 'MatchingPassword');

        const validationMessage = screen.getByText(/passwords match/i)
        expect(validationMessage).toBeInTheDocument()
      });
      it('THEN: validation message and fields have appropriate css class', async () => {
        render(<LoginPage />);
        const password = screen.getByLabelText('Password')
        const verifyPassword = screen.getByLabelText('Verify Password')

        await userEvent.type(password, 'MatchingPassword');
        await userEvent.type(verifyPassword, 'MatchingPassword');
        const validationMessage = screen.getByText(/passwords match/i)

        expect(validationMessage).toHaveClass('Login-page-password-message Login-page-password-message-valid')
        expect(password).toHaveClass('Login-page-input Login-page-input-valid')
        expect(verifyPassword).toHaveClass('Login-page-input Login-page-input-valid')
      });
    });
    describe('AND: passwords do NOT match', () => {
      it('THEN: validation message shows that passwords to NOT match', async () => {
        render(<LoginPage />);
        const password = screen.getByLabelText('Password')
        const verifyPassword = screen.getByLabelText('Verify Password')

        await userEvent.type(password, 'Password');
        await userEvent.type(verifyPassword, 'NoMatchy');

        const validationMessage = screen.getByText(/passwords do not match/i)
        expect(validationMessage).toBeInTheDocument()
      });
      it('THEN: validation message and fields have appropriate css class', async () => {
        render(<LoginPage />);
        const password = screen.getByLabelText('Password')
        const verifyPassword = screen.getByLabelText('Verify Password')

        await userEvent.type(password, 'Password');
        await userEvent.type(verifyPassword, 'NoMatchy');
        const validationMessage = screen.getByText(/passwords do not match/i)

        expect(validationMessage).toHaveClass('Login-page-password-message Login-page-password-message-invalid')
        expect(password).toHaveClass('Login-page-input Login-page-input-invalid')
        expect(verifyPassword).toHaveClass('Login-page-input Login-page-input-invalid')
      });
    });
  });
  describe('WHEN: user types in Password field', () => {
    describe('AND: Verify Password field is blank', () => {
      it('THEN: validation message is not shown', async () => {
        render(<LoginPage />);
        const password = screen.getByLabelText('Password')
        const verifyPassword = screen.getByLabelText('Verify Password')

        await userEvent.type(password, 'MatchingPassword');
        await userEvent.clear(verifyPassword);

        const validationMessageValid = screen.queryByText(/passwords match/i)
        const validationMessageInvalid = screen.queryByText(/passwords do not match/i)

        expect(validationMessageValid).not.toBeInTheDocument()
        expect(validationMessageInvalid).not.toBeInTheDocument()
      });
    });
  });
  describe('GIVEN: passwords currently match and validation message is displayed', () => {
    describe('WHEN: Verify Password field is cleared', () => {
      it('THEN: validation message disappears', async () => {
        render(<LoginPage />);
        const password = screen.getByLabelText('Password')
        const verifyPassword = screen.getByLabelText('Verify Password')

        await userEvent.type(password, 'MatchingPassword');
        await userEvent.type(verifyPassword, 'MatchingPassword');

        let validationMessage = screen.getByText(/passwords match/i)
        expect(validationMessage).toBeInTheDocument()

        await userEvent.clear(verifyPassword);

        validationMessage = screen.queryByText(/passwords match/i)
        expect(validationMessage).not.toBeInTheDocument()
      });
    });
    describe('WHEN: Password field is changed to no longer match Verify Password field', () => {
      it('THEN: validation message shows that passwords to NOT match', async () => {
        render(<LoginPage />);
        const password = screen.getByLabelText('Password')
        const verifyPassword = screen.getByLabelText('Verify Password')

        await userEvent.type(password, 'MatchingPassword');
        await userEvent.type(verifyPassword, 'MatchingPassword');

        let validationMessage = screen.getByText(/passwords match/i)
        expect(validationMessage).toBeInTheDocument()

        await userEvent.type(password, 'NoMoreMatchy');

        validationMessage = screen.getByText(/passwords do not match/i)
        expect(validationMessage).toBeInTheDocument()
      });
    });
  });
});
