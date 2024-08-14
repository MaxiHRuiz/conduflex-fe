import axios, { Axios, AxiosInstance } from "axios";
import { useAuth } from "context/Auth";
import { BASE_URL } from "lib/constanst";

const TIME_OUT = 50000;
interface IAxiosProps extends AxiosInstance {
  updateToken?: (token: string) => void;
}

const axiosCore: IAxiosProps = axios.create({
  baseURL: 'https://conduflex-be.onrender.com',
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true,
  timeout: TIME_OUT
})

// axiosCore.interceptors.request.use(config => {
//   const { userSession } = useAuth()
//   const _config = config

//   const token = userSession?.access_token ?? ''
//   console.log('token', '')

//   if (token) {
//     _config.headers.Authorization = `Bearer ${token}`
//     _config.maxBodyLength = Infinity
//     _config.maxContentLength = Infinity
//   }

//   return _config
// },
//   error => Promise.reject(error)
// );

// axiosCore.interceptors.response.use(response => response.data)

export default axiosCore