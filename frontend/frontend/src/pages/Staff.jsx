import React, { useEffect, useState } from "react";
import { USER } from "../constants";
import api from "../api";
import SaffCard from "../components/SaffCard";
import Footer from "./Footer";
import Nav from "../components/Nav";

const Staff = () => {
  const [staffs, setStaffs] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getStaff() {
    try {
      setLoading(true);
      const res = await api.get("/staff");

      setStaffs(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getStaff();
  }, []);

  const currentUser = localStorage.getItem(USER);

  return (
    <>
      <Nav />
      {loading ? (
    
        <p className="text-center text-blue-500">Loading....</p>
        
      ) : (
        <div className="flex flex-wrap items-center justify-center p-2">
          {staffs.length > 0 ? (
            staffs.map((staff) => {
              return <SaffCard key={staff.id} staff={staff} />;
            })
          ) : (
            <div>No staffs</div>
          )}
        </div>
      )}
      <Footer />
    </>
  );
};

export default Staff;
