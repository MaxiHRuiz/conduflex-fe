import axios, { Axios, AxiosInstance } from "axios";
import { useAuth } from "context/Auth";
import { supabase } from "lib/api";
import { REACT_APP_BASE_URL } from "lib/constanst";

const TIME_OUT = 50000;
interface IAxiosProps extends AxiosInstance {
  updateToken?: (token: string) => void;
}

const axiosCore: IAxiosProps = axios.create({
  baseURL: REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  // withCredentials: true,
  timeout: TIME_OUT
})

axiosCore.interceptors.request.use(async config => {
  const _config = config
  // await supabase.auth.getSession().then(({ data: { session } }) => {
  //   _config.headers.Authorization = `Bearer ${session?.access_token}`
  // });

  return _config
},
  error => Promise.reject(error)
);

// axiosCore.interceptors.response.use(response => response.data)

export default axiosCore