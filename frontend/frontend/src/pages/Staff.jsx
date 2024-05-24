import React, { useEffect, useState } from "react";
import { USER } from "../constants";
import api from "../api";
import SaffCard from "../components/SaffCard";
import Footer from "./Footer";
import Nav from "../components/Nav";

const Staff = () => {
  const [staffs, setStaffs] = useState([]);

  async function getStaff() {
    const res = await api.get("/staff");

    setStaffs(res.data);
  }

  useEffect(() => {
    getStaff();
  }, []);

  

  return (
      <>
          <Nav/>
    
      <div className="flex flex-wrap items-center justify-center p-2">
        {staffs.length > 0 ? (
          staffs.map((staff) => {
            return <SaffCard key={staff.id} staff={staff} />;
          })
        ) : (
          <div>No staffs</div>
        )}
          </div>
          <Footer/>
    </>
  );
};

export default Staff;
