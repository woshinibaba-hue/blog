import request from '@/server'

import { LoginBase, ILoginRes } from './types'

// 获取验证码
export const getLoginCode = () => {
  return request.get<string>({
    url: '/getCaptcha'
  })
}

// 验证 验证码
export const checkLoginCode = (captcha: string) => {
  return request.post<boolean>({
    url: '/verifyCaptcha',
    data: {
      captcha
    }
  })
}

// 登录
export const login = (data: LoginBase) => {
  return request.post<ILoginRes>({
    url: '/login',
    data
  })
}

// github 登录
export const githubLogin = (code: string) => {
  return request.post<ILoginRes>({
    url: '/github',
    data: {
      code
    }
  })
}

// 注册用户
export const register = (data: any) => {
  return request.post<ILoginRes>({
    url: '/user',
    data
  })
}
