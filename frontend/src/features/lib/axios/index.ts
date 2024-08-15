import axios from 'axios';
import {auth} from "@/features/lib/auth";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  async (config) => {
    const session = await auth();

    if (session?.user?.jwtToken) {
      config.headers.Authorization = `${session.user.jwtToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       try {
//         await signIn(); // This will trigger the refresh token flow
//         return api(originalRequest);
//       } catch (refreshError) {
//         // Handle refresh token failure
//         return Promise.reject(refreshError);
//       }
//     }
//     return Promise.reject(error);
//   }
// );

export default api

export * from "./google"
