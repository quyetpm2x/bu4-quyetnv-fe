'use strict'
import axios from 'axios';

export const axiosInstance = axios.create({
  // eslint-disable-next-line max-len
  baseURL: `http://localhost:3000`,
  timeout: 5000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhpZXU5QGdtYWlsLmNvbSIsImlzc3VlcklkIjoiNjFkZmQ3MWRjYTU1YWYxODc1MTJlM2MyIiwicm9sZXMiOlsxXSwiaWF0IjoxNjQyMDU5NTU3LCJleHAiOjE2NDIwNjMxNTd9.L_71rydDfgDqiGtyHY5Oq1rHc3ZK09B98m7wrd782jM`,
  },
}); 


// module.exports = {
//   axiosInstance,
// };
