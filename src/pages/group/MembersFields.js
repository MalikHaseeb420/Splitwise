import React from 'react'

function MembersFields() {
  return (
    <div className='row mb-3'>
      <div className='col'>
        <input
          className='form-control'
          type='text'
          placeholder='Enter Group Members'
          aria-label='Enter Group Members'
        />
      </div>
      <div className='col'>
        <input
          className='
      form-control'
          type='email'
          placeholder='Enter Group Members'
          aria-label='Enter Group Members'
        />
      </div>
    </div>
  )
}

export default MembersFields
