import React, { useState } from 'react'
import logo from '../../assets/google-icon.svg'
import LoginForm from './LoginForm'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth, provider } from '../../firebase'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../../store/actions'
import { useNavigate } from 'react-router-dom'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

function Login() {
  const [error, setError] = useState('')
  const navigator = useNavigate()
  const dispatch = useDispatch()
  async function handleSubmit(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredentials => {
        dispatch(actionCreators.login(userCredentials.user))
        setError('')
        navigator('/')
      })
      .catch(error => {
        setError(error.message)
      })
  }
  function handleGoogleLogin() {
    signInWithPopup(auth, provider)
      .then(result => {
        const credential = GoogleAuthProvider.credentialFromResult(result)
        const token = credential.accessToken
        let user = result.user
        user = { ...user, token: token }
        dispatch(actionCreators.login(user))
        navigator('/')
        // ...
      })
      .catch(() => {
        setError('User not found')
      })
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-10 col-lg-4 mx-auto bg-white p-4'>
          <p className='text-danger'>{error && error}</p>
          <LoginForm handleSubmit={handleSubmit} />
          <button onClick={handleGoogleLogin} className='btn  mt-5'>
            <img src={logo} alt='google' />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
