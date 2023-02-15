import { useState } from "react"
import LoginPageField from "./LoginPageField"

function LoginPagePasswords() {
  const [verifyPasswordState, setVerifyPasswordState] = useState('')
  const [passwordState, setPasswordState] = useState('')
  const [validationMessageState, setValidationMessageState] = useState('')

  function shouldShowValidation(verifyPassword) {
    return !!verifyPassword
  }

  function passwordsMatch(password, verifyPassword) {
    return password === verifyPassword
  }

  function updateValidationMessage(password, verifyPassword) {
    if (!shouldShowValidation(verifyPassword)) {
      setValidationMessageState('')
    }
    else if (passwordsMatch(password, verifyPassword)) {
      setValidationMessageState('Passwords match')
    }
    else {
      setValidationMessageState('Passwords do not match')
    }
  }

  function handlePasswordChange(event) {
    const newPassword = event.target.value
    
    setPasswordState(newPassword)

    updateValidationMessage(newPassword, verifyPasswordState)
  }

  function handleVerifyPasswordChange(event) {
    const newVerifyPassword = event.target.value

    setVerifyPasswordState(newVerifyPassword)

    updateValidationMessage(passwordState, newVerifyPassword)
  }

  function getValidationMessageClass() {
    if (!shouldShowValidation(verifyPasswordState) || passwordsMatch(passwordState, verifyPasswordState)) return 'Login-page-password-message-valid'

    return 'Login-page-password-message-invalid'
  }

  function getInputValidationStatusClass() {
    if (!shouldShowValidation(verifyPasswordState) || passwordsMatch(passwordState, verifyPasswordState)) return 'Login-page-input-valid'

    return 'Login-page-input-invalid'
  }

  return (
    <>
      <LoginPageField
        text='Password'
        type='password'
        additionalClasses={getInputValidationStatusClass()}
        placeholder='Enter password'
        onChangeHandler={(event) => handlePasswordChange(event)}
        value={passwordState}
      />
      <LoginPageField
        text='Verify Password'
        type='password'
        additionalClasses={getInputValidationStatusClass()}
        placeholder='Enter password one more time please'
        onChangeHandler={(event) => handleVerifyPasswordChange(event)}
        value={verifyPasswordState}
      />
      {validationMessageState && 
        <div>
          <p className={'Login-page-password-message ' + getValidationMessageClass()}>{validationMessageState}</p>
        </div>
      }
    </>
  )
}

export default LoginPagePasswords