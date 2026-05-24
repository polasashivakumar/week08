import React from 'react'
import Header from './Header.jsx'
import { Outlet } from 'react-router'
import Footer from './Footer.jsx'

function RootLayout() {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default RootLayout