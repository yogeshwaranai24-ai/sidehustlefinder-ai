import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  getRecommendations: (formData) => api.post('/recommend', formData),
  getMarketTrends: () => api.get('/trends'),
  getSuccessStories: () => api.get('/stories'),
  
  // Add interceptors for error handling
  setupInterceptors: (store) => {
    api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response) {
          switch (error.response.status) {
            case 401:
              // Handle unauthorized
              break;
            case 500:
              // Handle server error
              break;
            default:
              // Handle other errors
          }
        }
        return Promise.reject(error);
      }
    );
  }
};