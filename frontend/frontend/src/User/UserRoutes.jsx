import { Routes,Route } from 'react-router-dom'
import React from 'react'
import Dashboard from './Dashboard'
import Apply from './Apply'
import Usernav from './Usernav'

function UserRoutes() {
    const user = localStorage.getItem('user')
    const token = localStorage.getItem('access')

    if (!user && !token){
        window.location.replace('/signin')   
        return null
     }

  return (
    <div>
      <Usernav/>
        <Routes>
        <Route path="/" element={<Dashboard/>} />
        <Route path="/apply" element={<Apply/>} />
        <Route path="/profile" element={<Dashboard/>} />
        
        </Routes>
    </div>
  )
}

export default UserRoutes