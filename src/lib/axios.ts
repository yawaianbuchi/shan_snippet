import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';

const appAxios = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

appAxios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    if (config.headers) {
      //TODO: add headers
    }
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  }
);

appAxios.interceptors.response.use(
  async (response: AxiosResponse) => {
    if (!response.data) {
      return Promise.reject(response);
    }
    return response;
  },
  async (error: AxiosError) => {
    return Promise.reject(error);
  }
);

export default appAxios;
