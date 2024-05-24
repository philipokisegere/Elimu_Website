import {  Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";

// import "./App.css";
import Home from "./pages/Home";
// import Home from "./pages/NewsAndUpdate";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Staff from "./pages/Staff";
import NotFound from "./pages/NotFound";
// import Navbar from "./components/Navbar";
import { Admin } from "./pages/Admin";
import Footer from "./pages/Footer";
// import Nav from "./components/Nav";
import Academics from "./pages/Academics";
import Programmes from "./pages/Programmes";
import Payments from "./pages/Payments";
import NewsAndUpdates from "./pages/NewsAndUpdate";
import UserRoutes from "./User/UserRoutes";
// import Unauthorized from "./reusable/Unauthorized"
function App() {

  return (
    <>
     
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<NewsAndUpdates />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/programmes" element={<Programmes />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/user/dashboard/*" element={<UserRoutes/>}/>
          {/* <Route path = "/unauthorized" element={<Unauthorized/>}/> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
  
    </>
  );
}

export default App;
