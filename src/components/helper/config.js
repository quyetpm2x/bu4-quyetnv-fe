'use strict'
import axios from 'axios';

export const axiosInstance = axios.create({
  // eslint-disable-next-line max-len
  baseURL: `http://localhost:3000`,
  timeout: 5000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhpZXV2dWJrMjE3QGdtYWlsLmNvbSIsImlzc3VlcklkIjoiNjFkMWM5MDhmMGExM2E0NWE2Njk3MjdkIiwicm9sZXMiOlsxXSwiaWF0IjoxNjQxMTM4NDQ0LCJleHAiOjE2NDExNDIwNDR9.7kJOEiwY2lrMQycz8O9Xn8LNw0GSndU3qAUjoKq0wGQ`,
  },
}); 


// module.exports = {
//   axiosInstance,
// };
