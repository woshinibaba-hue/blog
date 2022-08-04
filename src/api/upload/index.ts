import request from '@/server'

// 上传至七牛云
export const uploadFileImg = () => {
  return request.post<{ uploadToken: string }>({
    url: '/upload/img'
  })
}
