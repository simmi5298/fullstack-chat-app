//we will use axios to create instance that we can use throughout our application
import axios from "axios";
export const axiosInstance=axios.create({
    baseURL:import.meta.env.MODE==="devlopment" ? "http://localhost:5001/api":"/api",
    withCredentials:true,
})