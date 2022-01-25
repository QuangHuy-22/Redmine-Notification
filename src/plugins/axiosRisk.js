import axios from 'axios'

const axiosInstanceRisk = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL_RISK,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "User-Agent": "Web",
        Authorization: `Bearer ${process.env.VUE_APP_TOKEN_RISK}`,
    }
})

export default axiosInstanceRisk