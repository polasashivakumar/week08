import React from 'react'
import { useForm } from 'react-hook-form'

function AddUser() {

  const { handleSubmit, register, reset } = useForm()

  const submitUser = async(userData) => {

    try {

      const response = await fetch(
        'https://week08-usermanagement.onrender.com/user-api/adduser',
        {
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(userData)
        }
      )

      const data = await response.json()

      console.log(data)

      alert("User Added Successfully")

      reset()

    }
    catch(err){
      console.log(err)
    }

  }

  return (

    <div className='min-h-screen bg-gray-100 flex justify-center items-center'>

      <div className='bg-white p-8 rounded-xl shadow-lg w-[420px]'>

        <h1 className='text-2xl font-bold text-center text-blue-500 mb-6'>
          Add User
        </h1>

        <form
          onSubmit={handleSubmit(submitUser)}
          className='flex flex-col gap-4'
        >

          <input
            type='text'
            placeholder='First Name'
            {...register("firstname")}
            className='border p-3 rounded-lg outline-none focus:border-blue-500'
          />

          <input
            type='email'
            placeholder='Email'
            {...register("email")}
            className='border p-3 rounded-lg outline-none focus:border-blue-500'
          />

          <input
            type='number'
            placeholder='Experience'
            {...register("experience")}
            className='border p-3 rounded-lg outline-none focus:border-blue-500'
          />

          {/* Gender field */}

          <select
            {...register("gender")}
            className='border p-3 rounded-lg outline-none focus:border-blue-500'
          >
            <option value="">Select Gender</option>
            <option value="MALE">Male</option>
            <option value="FEMALE">Female</option>
            <option value="OTHERS">Others</option>
          </select>

          <button
            type='submit'
            className='bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-700 transition'
          >
            Add User
          </button>

        </form>

      </div>

    </div>

  )
}

export default AddUser
