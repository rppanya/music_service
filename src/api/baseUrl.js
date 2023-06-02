import axios from "axios";
const baseURL = "http://212.113.118.22:8080/";

const instance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

instance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return { error: error.response, isError: true };
  }
);

export default instance;
