import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:4000',
});

// api.interceptors.response.use(
//   () => {},
//   (error) => {
//     if (error) {
//       console.log({ title: 'axios erorr', error: error.response });
//     }
//     return Promise.reject(error);
//   }
// );

export default api;
