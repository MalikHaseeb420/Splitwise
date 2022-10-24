import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import * as routes from '../../constants/routes'

function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark '>
      <div className='container'>
        <Link className='text-warning navbar-brand' to={routes.rootPath}>
          <Logo />
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='#'>
                Home
              </a>
            </li>
          </ul>
          <Link to={routes.loginPath} className='btn btn-primary me-3 p-2'>
            Login
          </Link>
          <Link to={routes.signUpPath} className='btn btn-success p-2'>
            SignUp
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
