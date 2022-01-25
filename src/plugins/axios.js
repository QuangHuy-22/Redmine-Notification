import axios from 'axios'

const token = localStorage.getItem("token")
const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL_USER,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "User-Agent": "Web",
        Authorization: `Bearer ${token}`,
    }
})

export default  axiosInstance