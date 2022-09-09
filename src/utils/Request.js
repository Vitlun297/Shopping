import axios from "axios";


const baseURL = 'https://fakestoreapi.com';

let headers = {}

const axiosInstance = axios.create({
    baseURL: baseURL,
    headers,
});



axiosInstance.interceptors.request.use(
    async (config) => {
        const token = await localStorage.getItem('token')
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
            
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
export default axiosInstance