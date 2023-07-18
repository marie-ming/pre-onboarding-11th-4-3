import axios, { AxiosInstance } from 'axios';
import BASE_URL from '../constants/api';

const request: AxiosInstance = axios.create({
  baseURL: BASE_URL.devlop,
});

export default request;
