import React from 'react'

function UserCard({ user }) {
  return (
    <div className='bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition duration-300 border border-gray-200'>

      <div className='flex flex-col gap-3'>

        <p className='text-xl font-bold text-blue-600'>
          {user.firstname}
        </p>

        <p className='text-gray-700'>
          <span className='font-semibold'>Email:</span> {user.email}
        </p>

        <p className='text-gray-700'>
          <span className='font-semibold'>Experience:</span> {user.experience}
        </p>

        <p className='text-gray-700'>
          <span className='font-semibold'>Gender:</span>

          <span className='ml-2 px-2 py-1 rounded-lg bg-blue-100 text-blue-700 text-sm'>
            {user.gender}
          </span>
        </p>

      </div>

    </div>
  )
}

export default UserCard