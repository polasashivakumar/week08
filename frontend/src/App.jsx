import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router'
import RootLayout from './components/RootLayout.jsx'
import Home from './components/Home.jsx'
import AddUser from './components/AddUser.jsx'
import { useEffect } from 'react'

const router = createBrowserRouter([{
    path:"/",
    element:<RootLayout/>,
    children:[
      {
        path:"",
        element:<Home/>
      },{
        path:"/adduser",
        element:<AddUser/>
      }
    ]

  }])

function App() {
  
  return (
    <RouterProvider router={router}/>
  )
}

export default App