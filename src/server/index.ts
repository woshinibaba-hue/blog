import Request from './request'

const BASE_URL = process.env.REACT_APP_BASE_URL

const request = new Request({
  baseURL: BASE_URL,
  timeout: 5000,
  interceptors: {
    requestInstance: (config) => {
      // console.log('每个请求单独的请求拦截器')
      return config
    },
    requestInstanceCatch: (error) => {
      return Promise.reject(error)
    },
    responseInstance: (config) => {
      // console.log('每个请求单独的响应拦截器')
      return config
    },
    responseInstanceCatch: (error) => {
      return Promise.reject(error)
    }
  },
  withCredentials: true
})

const requestMusic = new Request({
  baseURL: process.env.REACT_APP_MUSIC_URL
})

export { requestMusic }

export default request
