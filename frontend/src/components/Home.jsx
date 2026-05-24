import React, { useState, useEffect } from 'react';
import UserRow from './UserRow';

function Home() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    const fetchUsers = async () => {
      try {
        const response = await fetch(
          'https://week08-usermanagement.onrender.com/user-api/users'
        );

        const data = await response.json();

        setUsers(data.payload);

      } catch (err) {
        console.log(err);
      }
    };

    fetchUsers();

  }, []);

  return (
    <div className='min-h-screen bg-gray-100 p-8'>
      <h1 className='text-3xl font-bold text-center mb-8'>
        Users List
      </h1>

      <UserRow users={users}/>
    </div>
  );
}

export default Home;
