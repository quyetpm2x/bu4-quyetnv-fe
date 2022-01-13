'use strict'
import axios from 'axios';

export const axiosInstance = axios.create({
  // eslint-disable-next-line max-len
  baseURL: `http://localhost:3000`,
  timeout: 5000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhpZXU3QGdtYWlsLmNvbSIsImlzc3VlcklkIjoiNjFkNDUyOWI5NmM2ZjJkYjgxNzY0OGVhIiwicm9sZXMiOlsxXSwiaWF0IjoxNjQxMzA0NzQ1LCJleHAiOjE2NDEzMDgzNDV9.KtwEloLpwmU5Tt7p5i7bIzPnBvPBGB9Hi38-wKKxS1w`,
  },
}); 


// module.exports = {
//   axiosInstance,
// };
