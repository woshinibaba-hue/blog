import dayjs from 'dayjs'

export type CommentType = {
  id: number
  content: string
  createtime: dayjs.ConfigType
  like_count?: number
  parent_comment?: {
    content: string
    username: string
  }
  user: {
    id: number
    avatar: string
    username: string
    isBoss: number
  }
  children?: CommentType[]
}

export type ArticleParamsType = {
  id?: string
  key?: string
  limit?: number
  page?: number
  tag_id?: number
  // 查找类型
  // updated 最近更新  hot 最热
  orderName?: 'updated' | 'hot'
}

export type ArticleType = {
  id: number
  title: string
  content: string
  like_user: number[]
  comment_count: number
  like_count: number
  cover?: string
  description: string
  isTop: number
  isComment: number
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
  updatetime: string
}

export type ArticleListType = {
  articles: ArticleType[]
  page: number
  total: number
  tagTotal: number
}
