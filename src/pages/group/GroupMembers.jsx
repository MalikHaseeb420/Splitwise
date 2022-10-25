/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-key */
/* eslint-disable no-console */
import React, { useState } from 'react'
import MembersFields from './MembersFields'

function GroupMembers() {
  const [membersCount, setMembersCount] = useState(1)
  function addMemberHandler() {
    setMembersCount(membersCount + 1)
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6 mx-auto'>
          <h4 className='text-center'>Add Your Group here</h4>
          <hr className='border border-danger' />
          <form>
            <div className='form-group mb-3'>
              <label className='form-label'>Group Name</label>
              <input
                className='
              form-control'
                type='text'
                placeholder='Enter Group Name'
                aria-label='Enter Group Members'
              />
            </div>

            <h3>Group Members</h3>
            <hr />
            <div className='row'>
              <div className='col'>
                <h6>Name</h6>
              </div>
              <div className='col'>
                <h5>Email</h5>
              </div>
            </div>
            {Array.from(Array(membersCount)).map((c, i) => {
              return <MembersFields key={`item-${i}`} />
            })}
          </form>
          <button onClick={addMemberHandler} className='d-block ms-auto mt-3 btn btn-success'>
            Add Another Member
          </button>
        </div>
      </div>
    </div>
  )
}

export default GroupMembers
