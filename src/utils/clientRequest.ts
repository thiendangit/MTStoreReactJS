import axios, { AxiosRequestConfig } from 'axios';
import OAuth from 'oauth-1.0a';
import CryptoJS from 'crypto-js';
const ALGORITHM = 'HMAC-SHA1';
const TIME_OUT = 15000;

const oauth = new OAuth({
  consumer: {
    key: process.env.CONSUMER_KEY,
    secret: process.env.CONSUMER_SECRET,
  },
  signature_method: ALGORITHM,
  hash_function(base_string: string, key: string) {
    return CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA1(base_string, key));
  },
});

const clientRequest = axios.create({
  baseURL: process.env.APP_BASE_URL,
  timeout: TIME_OUT,
});

const accessTokenInterceptor = (config: AxiosRequestConfig): AxiosRequestConfig => {
  config.headers = oauth.toHeader(
    oauth.authorize({
      url: `${config.baseURL}${config.url}`,
      method: config.method,
      data: config.params ?? config.data,
    }),
  );
  config.headers['Content-Type'] = 'application/json';
  return config;
};

clientRequest.interceptors.request.use(accessTokenInterceptor, (error) => Promise.reject(error));

export default clientRequest;
