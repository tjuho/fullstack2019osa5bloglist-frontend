import React from 'react'
import PropTypes from 'prop-types'

const LoginForm = ({ username, password, handleLogin }) => {
  return (
    <div className='login'>
      <h2>Login to application</h2>
      <form onSubmit={handleLogin}>
        username:
        <input value={username.value}
          onChange={username.onChange}
          type={username.type} />
        <br />
        password:
        <input value={password.value}
          onChange={password.onChange}
          type={password.type} />
        <br />
        <button type="submit">login</button>
      </form>
    </div>
  )
}


export default LoginForm

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  username: PropTypes.object.isRequired,
  password: PropTypes.object.isRequired
}