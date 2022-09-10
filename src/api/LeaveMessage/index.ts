import request from '@/server'

import { CommentType } from '../article/type'

export type LeaveMessageType = {
  data: CommentType[]
  count: number
}

// 获取留言列表
export const getLeaveMessage = (params: { page: number; limit: number }) => {
  return request.get<LeaveMessageType>({
    url: '/guestbook',
    params
  })
}

// 发布留言
export const postLeaveMessage = (content: string) => {
  return request.post({
    url: '/guestbook',
    data: {
      content
    }
  })
}

// 回复留言
export const replyLeaveMessage = (guestbookId: number, content: string) => {
  return request.post({
    url: '/guestbook/reply',
    data: {
      guestbookId,
      content
    }
  })
}

// 删除留言
export const deleteMsg = (id: number) => {
  return request.delete({
    url: `/guestbook?id=${id}`
  })
}
