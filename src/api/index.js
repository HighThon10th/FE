import axios from 'axios';
import { Storage } from "../storage/index";

const baseUrl = `http://13.125.121.37`;

export const Instance = axios.create({
  baseURL: baseUrl,
  timeout: 10000,
});

Instance.interceptors.request.use(
  (config) => {
    const accessToken = Storage.getItem('access_token');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
      config.headers.withCredentials = true
    }
    return config;
  },
  (error) => Promise.reject(error),
);
