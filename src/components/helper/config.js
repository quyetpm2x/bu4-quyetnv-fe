'use strict'
import axios from 'axios';

export const axiosInstance = axios.create({
  // eslint-disable-next-line max-len
  baseURL: `http://localhost:3000`,
  timeout: 5000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhpZXUxQGdtYWlsLmNvbSIsImlzc3VlcklkIjoiNjFkMmQzY2NiZGU4MzVlODZjMjVmZThlIiwicm9sZXMiOlsxXSwiaWF0IjoxNjQxMjc0NTExLCJleHAiOjE2NDEyNzgxMTF9.625GTsTIp6msWNZ7wYhzfiTyUNEQwZjfbwpQXeUS3hI`,
  },
}); 


// module.exports = {
//   axiosInstance,
// };
