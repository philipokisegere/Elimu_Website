import { useState, useEffect } from "react";
import axios from "axios";
import api from "../api";

function Featured() {
  const [departments, setDepartments] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://elimu-website.onrender.com/getdepartment")
      .then((res) => {
        console.log(res.data);
        if (Array.isArray(res.data)) {
          setDepartments(res.data.slice(0, 3));
          
        } else {
          console.error("Unexpected response data format:", res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">
        Featured Departments
      </h1>
      {loading ? <p clasName="text-center text-blue-500">Loading...</p> :
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {departments.length > 0 ? (
            departments.map((department) => (
              <div
                key={department.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <a href="/" className="block">
                  <img
                    alt={department.departmentName}
                    src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    className="h-64 w-full object-cover sm:h-80 lg:h-96"
                  />
                  <h3 className="mt-4 text-lg font-bold text-gray-900 sm:text-xl px-10">
                    {department.departmentName}
                  </h3>
                </a>
                <div className="p-4">
                  <h1 className="text-md font-semibold text-gray-800">
                    Some of the Courses Offered:
                  </h1>
                  {department.courses.length > 0 ? (
                    department.courses.slice(0, 2).map((course) => (
                      <div key={course.id}>
                        <p className="mt-2 text-gray-700">{course.courseName}</p>
                      </div>
                    ))
                  ) : (
                    <p className="mt-2 text-gray-700">No courses available</p>
                  )}
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-700">No departments available</p>
          )}
        </div>
      }
    </div>
  );
}

export default Featured;
