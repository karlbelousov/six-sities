import axios, {AxiosInstance} from 'axios';

const BASE_URL = 'https://10.react.htmlacademy.pro/six-cities';
const TIMEOT = 5000;

export function createApi(): AxiosInstance {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: TIMEOT
  });

  return api;
}
