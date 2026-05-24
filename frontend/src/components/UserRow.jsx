import React from 'react'
import UserCard from './UserCard'

function UserRow({ users }) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
      {
        users.map((userobj, index) => (
          <UserCard key={index} user={userobj}/>
        ))
      }
    </div>
  )
}

export default UserRow