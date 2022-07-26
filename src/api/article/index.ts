import request from '@/server'

import { ArticleParamsType, ArticleListType, CommentType } from './type'

// 请求文章列表
export const getArticleList = (params?: ArticleParamsType) => {
  return request.get<ArticleListType>({
    url: '/article',
    params: params ?? {}
  })
}

// 请求文章详情
export const getArticleDetail = (id: string) => {
  return request.get<ArticleListType>({
    url: '/article',
    params: {
      id
    }
  })
}

// 请求文章评论
export const getArticleComment = (id: string) => {
  return request.get<{
    count: number
    comments: CommentType[]
  }>({
    url: '/article/comment',
    params: {
      id
    }
  })
}
