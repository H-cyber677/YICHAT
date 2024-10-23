import axios from 'axios'
import type { AxiosRequestConfig, AxiosInstance } from 'axios';

type BaseResponse<T> = {
  data: T,
  status: number | string
}

class AxiosRequest {
  private axiosInstance: AxiosInstance  //存储Axios实例

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: '/api',   //后端传进来的服务器地址
      timeout: 50000
    })  //Axios的实例
    this.interceptorsRequest()
    this.interceptorsResponse()  //调用函数
  }

  // 请求拦截器
  private interceptorsRequest() {
    this.axiosInstance.interceptors.request.use((config) => {
      const accessToken = localStorage.getItem("access_token")
      config.headers.authorization = 'Bearer ' + accessToken;
      return config;
    }, function (error) {
      return Promise.reject(error);
    });
  }

  // 响应拦截器
  private interceptorsResponse() {
    this.axiosInstance.interceptors.response.use((response) => {
      // 2xx 范围内的状态码都会触发该函数。
      // 对响应数据做点什么
      return response;
    }, async (error) => {
      // 超出 2xx 范围的状态码都会触发该函数。
      // 对响应错误做点什么
      switch (error.response?.status) {
        case 400:
          // 错误处理
          console.log('错误请求');
          break;
        case 401:
          // 未授权,刷新token
          console.log('未授权')
          break;
        case 403:
          // 访问被拒绝
          console.log('访问被拒绝');
          break;
        case 404:
          // 请求不存在
          console.log('请求资源不存在');
          break;
        case 500:
          // 服务器错误
          console.log('服务器错误');
          break;
        default:
          console.log('其他错误', error.response.data.message);
          break;
      }
    });
  }

  async request<T>(axiosRequestConfig: AxiosRequestConfig): Promise<BaseResponse<T>> {
    return new Promise((resolve) => {
      this.axiosInstance(axiosRequestConfig).then(res => {
        resolve({
          status: res.status,
          data: res.data,
        });
      })
    })
  }

  async get<T>(url: string, config: AxiosRequestConfig = {}): Promise<BaseResponse<T>> {
    const { data, status } = await this.request<T>({
      ...config,
      url,
      method: 'get',
    });
    return { data, status };
  }

  async post<T>(url: string, body?: object, config?: AxiosRequestConfig): Promise<BaseResponse<T>> {
    const { data, status } = await this.request<T>({
      ...config,
      url,
      method: 'post',
      data: body,
    });
    return { data, status };
  }

  async put<T>(url: string, body: object | FormData, config?: AxiosRequestConfig): Promise<BaseResponse<T>> {
    const { data, status } = await this.request<T>({
      ...config,
      url,
      method: 'put',
    });
    return { data, status };
  }

  async del<T>(url: string, config?: AxiosRequestConfig): Promise<BaseResponse<T>> {
    const { data, status } = await this.request<T>({
      ...config,
      url,
      method: 'delete',
    });
    return { data, status };
  }
}

export default new AxiosRequest