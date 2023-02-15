import React from 'react';
import './LoginPage.css';

function LoginPage() {
  return (
    <div className='Login-page-container'>
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
            className='Login-page-input'
            placeholder='Enter Password'
            />
        </label>
      </div>
      <div className='Login-page-field'>
        <label className='Login-page-field-label'>
          Verify Password
          <input
            type='password'
            className='Login-page-input'
            placeholder='Verify Password'
            />
        </label>
      </div>
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