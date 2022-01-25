import axios from 'axios'

const axiosInstanceNotify = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL_NOTIFY,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "User-Agent": "Web",
        Authorization: `Bearer ${process.env.VUE_APP_TOKEN_NOTIFY}`,
    }
})

export default axiosInstanceNotify