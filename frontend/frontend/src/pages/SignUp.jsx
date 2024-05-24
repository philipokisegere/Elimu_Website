import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api";
import Nav from "../components/Nav";
import Footer from "./Footer";

const SignUp = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('')
  const [message,setMessage]=useState('')
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",

    phoneNumber: "",

    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validateForm = () => {
    let formErrors = {};
    let valid = true;

    if (!form.firstName.trim()) {
      formErrors.firstName = "First name is required";
      valid = false;
    }

    if (!form.email) {
      formErrors.email = "Email is required";
      valid = false;
    }

    if (!form.phoneNumber) {
      formErrors.phoneNumber = "Phone number is required";
      valid = false;
    }

    if (!form.password) {
      formErrors.password = "Password is required";
      valid = false;
    } else if (form.password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    if (form.password !== form.confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match";
      valid = false;
    }

    setErrors(formErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
        try {
          setLoading(true);
        const res = await api.post("auth/user/register", form);
        setMessage()
        setErrorMsg('')
        setTimeout(()=>{
          navigate('/user/dashboard');
        },1000)   
      } catch (error) {
        const errorMsg = error.response?.data?.error || 'An error occurred';
        setErrorMsg(errorMsg);
      } finally {
        setLoading(false);
      }
      console.log("Form submitted successfully");
      console.log(form);
    }
  };

  return (
    <div>
      <Nav />
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              {message && <p className="text-green-500">{message}</p>}
              {errorMsg && <p className="text-red-500">{errorMsg}</p>}    
              {loading && <p className="text-green-500">Creating User...</p>}    
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create an account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                {[
                  { label: "First Name", name: "firstName", type: "text" },
                  { label: "Last Name", name: "lastName", type: "text" },
                  { label: "Email", name: "email", type: "email" },

                  { label: "Phone Number", name: "phoneNumber", type: "text" },

                  { label: "Password", name: "password", type: "password" },
                  {
                    label: "Confirm Password",
                    name: "confirmPassword",
                    type: "password",
                  },
                ].map(({ label, name, type }) => (
                  <div key={name} className="flex items-center space-x-4">
                    <label
                      htmlFor={name}
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white w-1/4"
                    >
                      {label}
                    </label>
                    <input
                      type={type}
                      name={name}
                      id={name}
                      value={form[name]}
                      onChange={handleChange}
                      className={`bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-3/4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                        errors[name] && "border-red-500"
                      }`}
                      placeholder={label}
                      required={
                        name !== "lastName" &&
                        name !== "nationalId" &&
                        name !== "address"
                      }
                    />
                    {errors[name] && (
                      <p className="text-red-500">{errors[name]}</p>
                    )}
                  </div>
                ))}
                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Create an account
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to="/signin"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default SignUp;
