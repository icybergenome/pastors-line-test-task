import axios from 'axios';

const createAxiosInstance = isAuth => {
  const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    timeout: 12000,
  });
  instance.interceptors.request.use(
    config => {
      if (isAuth) {
        // eslint-disable-next-line no-param-reassign
        config.headers.Authorization = `Bearer ${process.env.REACT_APP_AUTH_TOKEN}`;
      }
      return { ...config };
    },
    error => {
      return Promise.reject(error);
    },
  );
  return instance;
};

export const axiosAuth = createAxiosInstance(true);
export const axiosNoAuth = createAxiosInstance(false);
