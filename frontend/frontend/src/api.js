import axios from "axios";
import { ACCESS_TOKEN } from "./constants";
// 
// console.log("Base URL:", import.meta.env.VITE_API_URL);

const api = axios.create({
  //   baseURL: import.meta.env.VITE_API_URL,
    baseURL: "http://127.0.0.1:5000",
    
});

api.interceptors.request.use(
  (config) => {
    // check for token
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
