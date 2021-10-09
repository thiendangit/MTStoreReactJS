import axios, { AxiosRequestConfig } from 'axios';

const TIME_OUT = 15000;

const clientRequestNormal = axios.create({
  baseURL: process.env.TECH_CRUNCH_URL,
  timeout: TIME_OUT,
});
clientRequestNormal.interceptors.request.use(
  (config) => {
    // Add configurations here
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);
export default clientRequestNormal;
