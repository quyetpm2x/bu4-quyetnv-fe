'use strict'
import axios from 'axios';

export const axiosInstance = axios.create({
  // eslint-disable-next-line max-len
  baseURL: `http://localhost:3000`,
  timeout: 5000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhpZXU1QGdtYWlsLmNvbSIsImlzc3VlcklkIjoiNjFkNDAxZDI0MTE3MWZiYzk0MDYwNjQ3Iiwicm9sZXMiOlsxXSwiaWF0IjoxNjQxMjg0MDU0LCJleHAiOjE2NDEyODc2NTR9.yqIN52eFLK_RqTi9iWa6Syp8mZqhqXEqgct1BZ49AIQ`,
  },
}); 


// module.exports = {
//   axiosInstance,
// };
