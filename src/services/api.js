import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000',
});

// api.interceptors.response.use(
//   () => {},
//   (error) => {
//     if (error) {
//       console.log('REDIRECT!!');
//     }
//     return Promise.reject(error);
//   }
// );

export default api;
