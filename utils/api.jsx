import axios from 'axios';

let apiInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

apiInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  error => {
    const { response } = error;
    console.log('throw', response);
    if (response && response?.status === 401) {
      console.log('apiConfig', response);
    }
    return Promise.reject(error);
  }
);

export const apiConfig = apiInstance;
