import axios from "axios";
import type { AxiosInstance } from "axios";

const AXIOS: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    withCredentials: true,
});

export default AXIOS;
