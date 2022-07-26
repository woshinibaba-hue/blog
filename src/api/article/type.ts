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
  page?: number
}

export type ArticleType = {
  id: number
  title: string
  content: string
  like_count: number
  cover?: string
  description: string
  user: {
    id: number
    avatar?: string
    username: string
    referral?: string
  }
  tags?: {
    id: number
    name: string
    cover?: string
    color: string
  }[]
  createtime: string
}

export type ArticleListType = {
  articles: ArticleType[]
  page: number
  total: number
}
