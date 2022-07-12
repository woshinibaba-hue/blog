import request from '@/server'

import { VisitorinfoType } from './type'

// 获取访客信息
export const getvisitorinfo = () => {
  return request.get<VisitorinfoType>({
    url: '/visitorinfo'
  })
}
