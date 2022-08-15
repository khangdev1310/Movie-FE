import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { toast } from 'react-toastify';

const axiosClient = axios.create({
  baseURL: 'https://api.spotify.com/v1/',
});

axiosClient.interceptors.request.use(
  async (config: AxiosRequestConfig) => {
    const userInfo = localStorage.getItem('token');
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
    // if (response && response.data) {
    //   return response.data;
    // }
    return response;
  },
  (err) => {
    if (err.response) {
      switch (err.response.status) {
        case 401:
          localStorage.removeItem('token');
          toast('Access is denied. Please login again', {
            position: 'bottom-center',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            onClose: () => {
              window.location.href = '/';
            },
          });

          toast.clearWaitingQueue({ containerId: 'toast-container' });
          break;

        case 403:
          toast.error('Forbidden', {
            position: 'bottom-center',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
          });
          toast.clearWaitingQueue({ containerId: 'toast-container' });
          break;
          case 500:
          // toast.error('Server Error', {
          //   position: 'bottom-center',
          //   autoClose: 1000,
          //   hideProgressBar: false,
          //   closeOnClick: false,
          //   pauseOnHover: false,
          //   draggable: false,
          //   progress: undefined,
          //   onClose: () => {
          //     window.location.href = '/'
          //   }
          // });
          // toast.clearWaitingQueue({ containerId: 'toast-container' });
          throw err
        default:
          return Promise.reject(err);
      }
    }
    return Promise.reject(err);
  }
);

export default axiosClient;
