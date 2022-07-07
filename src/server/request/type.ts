import { AxiosRequestConfig } from 'axios'

interface IRequestInterceptors {
  // 请求拦截器
  requestInstance?: (request: AxiosRequestConfig) => AxiosRequestConfig
  // 请求失败拦截器
  requestInstanceCatch?: (error: any) => any
  // 响应拦截器
  responseInstance?: (response: AxiosRequestConfig) => AxiosRequestConfig
  // 响应失败拦截器
  responseInstanceCatch?: (error: any) => any
}

// 扩展请求配置，使得传入更多的属性
interface IRequestConfig extends AxiosRequestConfig {
  interceptors?: IRequestInterceptors
}

// 服务器返回的数据类型
interface IDataResult<T = any> {
  code: number
  data: T
  message?: string
}

export type { IRequestConfig, IDataResult }
