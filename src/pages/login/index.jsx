import React, { useState } from 'react'
import LoginForm from './LoginForm'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../../store/actions'
import { useNavigate } from 'react-router-dom'
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
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-10 col-lg-4 mx-auto bg-white p-4'>
          <p className='text-danger'>{error && error}</p>
          <LoginForm handleSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  )
}

export default Login
