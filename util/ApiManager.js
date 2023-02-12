import axios from "axios";
const BASE_URL = "https://jsonplaceholder.typicode.com/";

const ApiManager = axios.create({
  //   baseURL: "https://localhost:27017/local",
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  //   responseType: "json",
  //   withCredentials: true,
});

export default ApiManager;
