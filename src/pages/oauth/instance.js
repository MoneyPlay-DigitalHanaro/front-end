// import axios from 'axios';

// // Axios 인스턴스 생성
// const instance = axios.create({
//     baseURL: 'http://localhost:3000',
//     timeout: 1000,
//     headers: {'Content-Type': 'application/json'}
// });

// instance.interceptors.request.use((config) => {
//     const token = localStorage.getItem('jwtToken');
//     if (token) {
//         config.headers['Authorization'] = 'Bearer ' + token;
//     }
//     return config;
// }, (error) => {
//     return Promise.reject(error);
// });

// export default instance;
