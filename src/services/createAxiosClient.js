import axios from 'axios';
import { useAuth } from '../context/Auth';

export function createAxiosClient({
  options,
  getCurrentAccessToken,
  getCurrentRefreshToken,
  refreshTokenUrl,
  logout,
  setRefreshedTokens,
}) {
  const client = axios.create(options);
  const {userSession} = useAuth()

  client.interceptors.request.use(
    (config) => {
      if (config.authorization !== false) {
        const token = userSession.access_token;
        if (token) {
          config.headers.Authorization = "Bearer " + token;
        }
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

 return client;

}