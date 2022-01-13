'use strict'
import axios from 'axios';

export const axiosInstance = axios.create({
  // eslint-disable-next-line max-len
  baseURL: `http://localhost:3000`,
  timeout: 5000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhpZXU4QGdtYWlsLmNvbSIsImlzc3VlcklkIjoiNjFkZmQ0MzhjZmNiNzRjODM1NjkwNDJjIiwicm9sZXMiOlsxXSwiaWF0IjoxNjQyMDg5NjU5LCJleHAiOjE2NDIwOTMyNTl9.97iFyxKp3lu68CB6zspIZazF4SK5J_wJ3TCVEkcCYN4`,
  },
}); 


// module.exports = {
//   axiosInstance,
// };
