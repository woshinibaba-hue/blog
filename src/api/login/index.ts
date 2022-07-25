import request from '@/server'

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
