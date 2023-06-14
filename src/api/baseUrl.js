import axios from "axios";
const baseURL = "http://212.113.118.22:8080/";

const instance = axios.create({
  baseURL: baseURL,
  // headers: {
  //   //"Content-Type": "application/json",
  //   "Content-Type": "multipart/form-data",
  //   //Accept: "application/json",
  //   Accept: "application/json, multipart/form-data"
  // },
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  console.log(config)
  return config;
});

instance.interceptors.response.use(
  (response) => {
    console.log(response.data)
    return response.data;
  },
  (error) => {
    console.log(error)
    return { error: error.response, isError: true };
  }
);

export default instance;
