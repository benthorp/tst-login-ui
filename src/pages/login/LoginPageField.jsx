function LoginPageField({text, type, additionalClasses, placeholder, onChangeHandler, value}) {
  return (
    <div className='Login-page-field'>
      <label className='Login-page-field-label'>
        {text}
        <input
          type={type}
          className={'Login-page-input ' + additionalClasses}
          placeholder={placeholder}
          onChange={onChangeHandler}
          value={value}
        />
      </label>
    </div>
  )
}

export default LoginPageField;