import axios, {
  AxiosInstance,
  AxiosError,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosResponse,
} from "axios";
import { checkStatus } from "./config/checkStatus";

const { Notification } = useNotification();

// 请求响应参数
interface Result {
  code: number;
  msg: string;
}

// 请求响应参数
interface ResultData<T = any> extends Result {
  data: T;
}

const config = {
  //baseURL: location.origin + "/api",
  timeout: 20000,
};

/**
 * @description 创建请求实例
 */
class RequestHttp {
  service: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.service = axios.create(config);
    this.service.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    this.service.interceptors.response.use(
      (response: AxiosResponse) => {
        // Notification(response.data.code, response.data.msg);
        return response.data;
      },
      (error) => {
        // 判断status码
        const { response } = error;

        if (response) {
          checkStatus(response.status);
        }
        return Promise.reject(error);
      }
    );
  }

  get<T>(url: string, params = {}, config = {}): Promise<ResultData<T>> {
    return this.service.get(url, { params, ...config });
  }

  post<T>(url: string, data: object, config = {}): Promise<ResultData<T>> {
    return this.service.post(url, data, config);
  }

  put<T>(url: string, data: object, config = {}): Promise<ResultData<T>> {
    return this.service.put(url, data, config);
  }

  delete<T>(url: string, data?: object, config = {}): Promise<ResultData<T>> {
    return this.service.delete(url, { data, ...config });
  }

  download(url: string, data?: object, config = {}): Promise<ResultData<any>> {
    // 接收二进制文件流
    return this.service.post(url, data, { ...config, responseType: "blob" });
  }
}

export default new RequestHttp(config);
