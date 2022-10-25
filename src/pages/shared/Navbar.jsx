import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import * as routes from '../../constants/routes'
import { useSelector } from 'react-redux'
import LoginBtn from './LoginBtn'
function Navbar() {
  const user = useSelector(state => state.loginReducer)
  return (
    <nav className='navbar navbar-expand-lg navbar-light mb-5'>
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
              <Link className='nav-link active' aria-current='page' to='/'>
                Home
              </Link>
            </li>
          </ul>
          {!user.email && <LoginBtn />}
          {user && user.email}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
