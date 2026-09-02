import axios from 'axios';
import { parseApiError } from './errors';

const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3333/api';

export const api = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const parsedError = parseApiError(error);
    
    if (parsedError.statusCode === 401 && typeof window !== 'undefined') {
       window.location.href = '/login'
    }
    
    return Promise.reject(parsedError)
  }
);