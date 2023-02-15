import React from 'react';
import './LoginPage.css';

function LoginPage() {
  return (
    <div className='Login-page-container'>
      <label>
        Username
        <input
          type='text'
        />
      </label>
      <label>
        Password
        <input
          type='text'
        />
      </label>
      <label>
        Verify Password
        <input
          type='text'
        />
      </label>
      <button
        type='button'
      >
        Login
      </button>
    </div>
  )
}

export default LoginPage