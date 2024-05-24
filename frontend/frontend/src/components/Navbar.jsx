import React from "react";
import { NavLink } from "react-router-dom";
import schlogo from '../assets/schlogo.png'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 navbar">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex-shrink-0">
          <NavLink to="/home">
            <img className="h-8" src={schlogo} alt="Logo" />
          </NavLink>
        </div>
        {/* Navigation Links */}
        <div className="flex">
          <NavLink
            to="/home"
            exact
            className="text-white px-3 py-2 rounded-md text-sm font-medium"
            activeClassName="bg-gray-900"
          >
            Home
          </NavLink>
          <NavLink
            to="/news"
            exact
            className="text-white px-3 py-2 rounded-md text-sm font-medium"
            activeClassName="bg-gray-900"
          >
            New And Events
          </NavLink>
          <NavLink
            to="/academics"
            className="text-white px-3 py-2 rounded-md text-sm font-medium"
            activeClassName="bg-gray-900"
          >
            Academics
          </NavLink>
          <NavLink
            to="/programmes"
            className="text-white px-3 py-2 rounded-md text-sm font-medium"
            activeClassName="bg-gray-900"
          >
           Our Programmes
          </NavLink>
          <NavLink
            to="/payments"
            className="text-white px-3 py-2 rounded-md text-sm font-medium"
            activeClassName="bg-gray-900"
          >
           Payments
          </NavLink>
          <NavLink
            to="/signup"
            className="text-white px-3 py-2 rounded-md text-sm font-medium"
            activeClassName="bg-gray-900"
          >
            Sign up
          </NavLink>
          <NavLink
            to="/signin"
            className="text-white px-3 py-2 rounded-md text-sm font-medium"
            activeClassName="bg-gray-900"
          >
            Sign In
          </NavLink>
        </div>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
