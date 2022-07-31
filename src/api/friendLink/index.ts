import request from '@/server'

import { BaseType, FriendLinkType } from './type'

// 获取友情链接列表
export const getFriendLinkList = () => {
  return request.get<{ total: number; data: FriendLinkType[] }>({
    url: '/link',
    params: {
      status: 1
    }
  })
}

// 申请友链
export const applyFriendLink = (data: BaseType) => {
  return request.post({
    url: '/link',
    data
  })
}
