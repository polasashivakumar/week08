import React from 'react';
import { NavLink } from 'react-router';

function Header() {

  const headeritems = [
    {
      name: 'Home',
      path: '/'
    },
    {
      name: 'Add User',
      path: '/adduser'
    }
  ];

  return (
    <div className='bg-blue-400 flex justify-around items-center p-4 w-full'>

      <p className='text-white font-bold text-xl'>
        User's Portfolio
      </p>

      <ul className='flex gap-6 list-none m-0 p-0'>

        {
          headeritems.map((item, index) => (
            <li key={index}>

              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? 'text-yellow-300 font-bold'
                    : 'text-white'
                }
              >
                {item.name}
              </NavLink>

            </li>
          ))
        }

      </ul>

    </div>
  );
}

export default Header;