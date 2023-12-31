/* eslint-disable no-console */
/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react'

import { useSelector } from 'react-redux'
import { database } from '../firebase'
import { doc, collection, getDocs } from 'firebase/firestore'
import { Link } from 'react-router-dom'
import * as routes from '../constants/routes/'
function Home() {
  const [userList, SetUserList] = useState([])
  const user = useSelector(state => state.loginReducer)
  const usersRef = collection(database, 'users')
  const handleClick = () => {
    getData()
  }
  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await getDocs(usersRef)

        const docs = data.docs.map(doc => ({ ...doc.data(), id: doc.id }))
        SetUserList(docs)
      } catch (e) {
        console.log(e)
      }
    }
    getUsers()
  }, [])
  async function getData() {
    const docRef = doc(database, 'users')
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      console.log('Document data:', docSnap.data())
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!')
    }
  }
  console.log('usdf', userList)
  return (
    <div className='container'>
      {user && <h1>welcome {user.email}</h1>}
      <h3>Less stress when sharing expenses</h3>

      <div>
        <Link to={routes.addGroupPath} className='btn btn-danger'>
          Add Group
        </Link>
        <button onClick={handleClick}>Click me</button>
      </div>
    </div>
  )
}

export default Home
