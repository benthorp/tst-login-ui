import React, { useState } from 'react';
import './LoginPage.css';
import logo from './TST-Logo-Consumer.png';

function LoginPage() {
  const [verifyPassword, setVerifyPasswordState] = useState('')
  const [password, setPasswordState] = useState('')
  const [validationMessage, setValidationMessageState] = useState('')

  const PASSWORDS_MATCH = 'Passwords match';
  const PASSWORDS_DONT_MATCH = 'Passwords do not match'

  function updateValidationMessage(currentPassword, currentVerifyPassword) {
    if (!currentVerifyPassword) {
      setValidationMessageState('')
    }
    else if (currentPassword === currentVerifyPassword) {
      setValidationMessageState(PASSWORDS_MATCH)
    }
    else {
      setValidationMessageState(PASSWORDS_DONT_MATCH)
    }
  }

  function handlePasswordChange(event) {
    const newPassword = event.target.value
    
    setPasswordState(event.target.value)

    updateValidationMessage(newPassword, verifyPassword)
  }

  function handleVerifyPasswordChange(event) {
    const newVerifyPassword = event.target.value

    setVerifyPasswordState(newVerifyPassword)

    updateValidationMessage(password, newVerifyPassword)
  }

  function getValidationMessageClass() {
    if (!validationMessage || validationMessage === PASSWORDS_MATCH) return 'Login-page-password-message-valid'

    return 'Login-page-password-message-invalid'
  }

  function getInputValidationStatusClass() {
    if (!validationMessage || validationMessage === PASSWORDS_MATCH) return 'Login-page-input-valid'

    return 'Login-page-input-invalid'
  }

  return (
    <div className='Login-page-container'>
      <header className="Login-page-header">
        <img src={logo} className="Login-page-logo" alt="logo" />
      </header>
      <div className='Login-page-field'>
        <label className='Login-page-field-label'>
          Username
          <input
            type='text'
            className='Login-page-input'
            placeholder='Enter Username'
          />
        </label>
      </div>
      <div className='Login-page-field'>
        <label className='Login-page-field-label'>
          Password
          <input
            type='password'
            className={'Login-page-input ' + getInputValidationStatusClass()}
            placeholder='Enter Password'
            onChange={(event) => handlePasswordChange(event)}
            value={password}
          />
        </label>
      </div>
      <div className='Login-page-field'>
        <label className='Login-page-field-label'>
          Verify Password
          <input
            type='password'
            className={'Login-page-input ' + getInputValidationStatusClass()}
            placeholder='Verify Password'
            onChange={(event) => handleVerifyPasswordChange(event)}
            value={verifyPassword}
          />
        </label>
      </div>
      {validationMessage && 
        <div>
          <p className={'Login-page-password-message ' + getValidationMessageClass()}>{validationMessage}</p>
        </div>
      }
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