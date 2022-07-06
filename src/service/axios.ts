import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

axiosClient.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const userInfo = localStorage.getItem("token");
    if (userInfo) {
      if (config.headers === undefined) {
        config.headers = {};
      }
      config.headers.Authorization = `Bearer ${userInfo}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

axiosClient.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (err) => {
    if (err.response) {
      switch (err.response.status) {
        case 401:
          localStorage.removeItem("token");
          break;
        case 403:
          alert("Forbidden");
          break;
        default:
          return Promise.reject(err);
      }
    }
    return Promise.reject(err);
  }
);

export default axiosClient;
