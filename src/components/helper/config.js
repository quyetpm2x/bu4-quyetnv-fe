'use strict'
import axios from 'axios';

export const axiosInstance = axios.create({
  // eslint-disable-next-line max-len
  baseURL: `http://localhost:3000`,
  timeout: 5000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhpZXU3QGdtYWlsLmNvbSIsImlzc3VlcklkIjoiNjFkNDUyOWI5NmM2ZjJkYjgxNzY0OGVhIiwicm9sZXMiOlsxXSwiaWF0IjoxNjQyMDQ3NjcxLCJleHAiOjE2NDIwNTEyNzF9.SZSnlTV1C6LuBAmwsULJfXMWXYWbpK-5tj-2yWiWH9g`,
  },
}); 


// module.exports = {
//   axiosInstance,
// };
