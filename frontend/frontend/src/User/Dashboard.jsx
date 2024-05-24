import React from 'react'
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

function Dashboard() {
  return (
    <div className='flex'>
      <Sidebar/>
      <div className="ml-64 p-6 w-full">
        <Outlet /> {/* This will render the nested routes */}
      </div>

    </div>
  )
}

export default Dashboard