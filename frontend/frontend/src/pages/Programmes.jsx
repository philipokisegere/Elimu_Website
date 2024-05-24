import React, { useEffect, useState } from "react";
// import { fetchPrograms } from "../mockAPI";
import api from "../api";
import Footer from "./Footer";
import Nav from "../components/Nav";
import CourseCard from "./CourseCard";

const Programmes = () => {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getDepartments() {
    try {
      setLoading(true);
      const res = await api.get("/getdepartment");
      setDepartments(res.data);
     
    } catch (error) {
      console.log("fetch department error: ", error);
    } finally {
      setLoading(false);
    }
    }
    

  useEffect(() => {
    getDepartments();
  }, []);

  return (
    <div>
          <Nav />
          {loading ? <p className="text-center text-blue-500">Loading...</p> :
              <div className="mx-auto px-4 py-16">
                  {departments.map((department) => (
                      <div key={department.id} className="text-center mb-12">
                          <h2 className="text-xl font-bold text-blue-700 mb-2">{department.departmentName}</h2>
                          {department.courses.length > 0 && <p>Courses Available </p>}
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                              {department.courses.map((course) => (
                
                                  <CourseCard
                                      key={course.id}
                                      name={course.courseName}
                                      img={course.img_url}
                                      desc={course.description}
                                  />
                              ))}
                          </div>
                      </div>
                  ))}
              </div>
              
          }

      <Footer />
    </div>
  );
};

export default Programmes;
