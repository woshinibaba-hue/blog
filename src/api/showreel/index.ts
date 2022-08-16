import request from '@/server'

export type ShowreelType = {
  id: number
  title: string
  description: string
  link: string
  cover: string
}

// 获取作品集列表
export function getShowreelList() {
  return request.get<ShowreelType[]>({
    url: '/showreel'
  })
}
