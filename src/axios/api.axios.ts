/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import Cookies from "js-cookie";

const getToken = () => {
  return Cookies.get("access_token");
};

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 3000,
  withCredentials: false,
});

api.interceptors.request.use(
  function (config) {
    const token = getToken();
    if (token) {
      config.headers = config.headers || {};
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  function (error: any) {
    return Promise.reject(error);
  }
);

export default api;
