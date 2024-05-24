import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const handleLogout = (()=>{
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        localStorage.removeItem("user");
        window.location.href = "/"
    })
  return (
    <div>
    <div className="h-screen w-64 bg-slate-50 text-black -mx-3 fixed">
       <div className="space-y-3 px-3  uppercase  ">
       <Link to="/dashboard/home" className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100  hover:text-gray-700" >
          Home
        </Link>        
        </div>
        <div className="space-y-3 px-3  uppercase ">
        <Link to="/dashboard/profile" className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100  hover:text-gray-700" >
          Profile
        </Link>
        </div>
        <div className="space-y-3 px-3  uppercase ">
        <Link to="/dashboard/settings" className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100  hover:text-gray-700" >
          Settings
        </Link>
        </div>
     
        <div className="space-y-3 px-3  uppercase  ">
        <button onClick={handleLogout} className="flex items-center px-3 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg hover:bg-gray-100  hover:text-gray-700" >
          Logout
        </button>
        </div>
    </div>
    </div>
  );
};

export default Sidebar;
