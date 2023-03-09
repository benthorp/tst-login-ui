import './LoginPage.css';
import LoginPageField from './LoginPageField';
import LoginPagePasswords from './LoginPagePasswords';
import logo from './logo-optimized-1-1.webp';

function LoginPage() {
  return (
    <div className='Login-page-container'>
      <header className="Login-page-header">
        <img src={logo} className="Login-page-logo" alt="logo" />
      </header>
      <LoginPageField
        text='Username'
        type='text'
        placeholder='Enter username'
      />
      <LoginPagePasswords />
      <button
        type='button'
        className='Login-page-login-button'
      >
        Login
      </button>
    </div>
  )
}

export default LoginPage