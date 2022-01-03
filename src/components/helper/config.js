'use strict'
import axios from 'axios';

export const axiosInstance = axios.create({
  // eslint-disable-next-line max-len
  baseURL: `http://localhost:3000`,
  timeout: 5000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhpZXUxQGdtYWlsLmNvbSIsImlzc3VlcklkIjoiNjFkMmQzY2NiZGU4MzVlODZjMjVmZThlIiwicm9sZXMiOlsxXSwiaWF0IjoxNjQxMjE3MDQ2LCJleHAiOjE2NDEyMjA2NDZ9.kUuLLD9HNK-EVGbzkObCLONUcH8Y56iTDLSJnQ2gTY0`,
  },
}); 


// module.exports = {
//   axiosInstance,
// };
