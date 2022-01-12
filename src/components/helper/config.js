'use strict'
import axios from 'axios';

export const axiosInstance = axios.create({
  // eslint-disable-next-line max-len
  baseURL: `http://localhost:3000`,
  timeout: 5000,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imh1c3RAZ21haWwuY29tIiwiaXNzdWVySWQiOiI2MWJkZjYxYTQwODBkMDQ4MGQyMzE0ZmIiLCJyb2xlcyI6WzFdLCJpYXQiOjE2NDEyNjcyMjQsImV4cCI6MTY0MTI3MDgyNH0.nrqCR978twXw1YaLAh42eriO2ojL8sCFIWQcYH8An0M`,
  },
}); 


// module.exports = {
//   axiosInstance,
// };
