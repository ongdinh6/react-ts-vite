import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000"
})

axiosInstance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    console.log("Fetching data failed with error: ", error);
    return Promise.reject(error);
});

axiosInstance.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    // handle 404 error
    return Promise.reject(error);
});



export default axiosInstance;