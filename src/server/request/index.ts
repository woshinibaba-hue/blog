import axios, { AxiosError, AxiosInstance } from 'axios'

import storage from '@/utils/storage'

import { message } from 'antd'

import { IRequestConfig, IDataResult } from './type'

class Request {
  private instance: AxiosInstance

  constructor(requestConfig: IRequestConfig) {
    this.instance = axios.create(requestConfig)

    // 给每个单独的请求配置添加拦截器
    this.instance.interceptors.request.use(
      requestConfig.interceptors?.requestInstance,
      requestConfig.interceptors?.requestInstanceCatch
    )

    this.instance.interceptors.response.use(
      requestConfig.interceptors?.responseInstance,
      requestConfig.interceptors?.responseInstanceCatch
    )

    // 给所有的axios实例添加拦截器
    this.instance.interceptors.request.use(
      (config) => {
        return config
      },
      (err) => {
        return Promise.reject(err)
      }
    )

    this.instance.interceptors.response.use(
      (response) => {
        return response.data
      },
      (err: AxiosError<IDataResult>) => {
        if (err.response?.data.message) {
          message.config({
            duration: 2,
            maxCount: 1
          })
          message.error(err.response.data.message)
        }

        // token 过期，删除当前用户信息
        if (err.response?.data.code === -1) {
          storage.remove('login_info')
          storage.remove('user_token')
          message.error('token已失效，请重新登录')
        }

        return Promise.reject(err)
      }
    )
  }

  // 请求方法
  private request<T = unknown>(requestConfig: IRequestConfig) {
    return new Promise<IDataResult<T>>((resolve, reject) => {
      this.instance
        .request<unknown, IDataResult<T>>(requestConfig)
        .then((res) => {
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  get<T = unknown>(config: IRequestConfig) {
    return this.request<T>({ ...config, method: 'get' })
  }

  post<T = unknown>(config: IRequestConfig) {
    return this.request<T>({ ...config, method: 'post' })
  }

  put<T = unknown>(config: IRequestConfig) {
    return this.request<T>({ ...config, method: 'put' })
  }

  delete<T = unknown>(config: IRequestConfig) {
    return this.request<T>({ ...config, method: 'delete' })
  }
}

export default Request
