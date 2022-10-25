/* eslint-disable no-alert */
/* eslint-disable no-magic-numbers */
import React from 'react'
import { useSelector } from 'react-redux'
import { database } from '../firebase'
import { doc, setDoc } from 'firebase/firestore'
function Home() {
  const user = useSelector(state => state.loginReducer)
  const collectionRef = doc(database, 'users')
  function handleClick() {
    setDoc(collectionRef, {
      email: 'muhammadhaseebtcf@gmail.com',
      password: 'malik123'
    })
      .then(() => alert('data added successfully'))
      .catch(e => {
        alert('error', e)
      })
  }
  return (
    <div className='container'>
      {user && <h1>welcome {user.email}</h1>}
      <h3>Less stress when sharing expenses</h3>
      <div>
        <button onClick={handleClick} className='btn btn-danger'>
          Add User
        </button>
      </div>
    </div>
  )
}

export default Home
