import axios from "axios";
import ElementUI from 'element-ui';

const instance = axios.create({
    baseURL: "",
    timeout: 2000
})

instance.interceptors.request.use((config) => {
    return config;
})

instance.interceptors.response.use((res) => {
    console.log(res)
    return res
})

export default instance;