import React from 'react'
import PropTypes from 'prop-types'

const LoginForm = ({ username, handleUsernameChange,
  password, handlePasswordChange, handleLogin }) => {
  return (
    <div>
      <h2>Login to application</h2>
      <form onSubmit={handleLogin}>
        username:
        <input
          value={username}
          onChange={handleUsernameChange} />
        <br />
        password:
        <input
          value={password}
          onChange={handlePasswordChange} />
        <br />
        <button type="submit">login</button>
      </form>
    </div>
  )
}

export default LoginForm

LoginForm.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  handleUsernameChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}