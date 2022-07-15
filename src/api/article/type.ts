import dayjs from 'dayjs'

export type CommentType = {
  id: number
  content: string
  createtime: dayjs.ConfigType
  like_count?: number
  user: {
    avatar: string
    username: string
  }
  children?: CommentType[]
}

export type ArticleParamsType = {
  id?: string
  key?: string
  limit?: number
  offset?: number
}

export type ArticleType = {
  id: number
  title: string
  content: string
  like_count: number
  cover?: string
  user: {
    id: number
    avatar?: string
    username: string
    referral?: string
  }
  comments?: CommentType[]
  tags?: {
    id: number
    name: string
    cover?: string
  }[]
  createtime: string
}
