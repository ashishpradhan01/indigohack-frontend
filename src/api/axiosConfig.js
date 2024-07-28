import axios from "axios";
import { BASE_URL } from "../constants";

const axiosInstance = axios.create({
  baseURL: BASE_URL, // Replace with your Spring Boot server URL
});

export default axiosInstance;
