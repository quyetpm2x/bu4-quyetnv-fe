'use strict'
import axios from 'axios';

export const axiosInstance = axios.create({
  // eslint-disable-next-line max-len
  baseURL: `http://localhost:3000`,
  timeout: 5000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imh1c3RAZ21haWwuY29tIiwiaXNzdWVySWQiOiI2MWJkZjYxYTQwODBkMDQ4MGQyMzE0ZmIiLCJyb2xlcyI6WzFdLCJpYXQiOjE2NDExMzE1NzgsImV4cCI6MTY0MTEzNTE3OH0.ZAjkyWrqry3lR845_az8dHZzi3vsyGuq2amVYAiWjVg`,
  },
}); 


// module.exports = {
//   axiosInstance,
// };
