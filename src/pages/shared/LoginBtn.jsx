import React from 'react'
import * as routes from '../../constants/routes'
import { Link } from 'react-router-dom'
function LoginBtn() {
  return (
    <div>
      <Link to={routes.loginPath} className='btn btn-primary me-3 p-2'>
        Login
      </Link>
      <Link to={routes.signUpPath} className='btn btn-success p-2'>
        SignUp
      </Link>
    </div>
  )
}

export default LoginBtn
