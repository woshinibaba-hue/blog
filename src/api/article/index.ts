import request from '@/server'

import { ArticleParamsType, ArticleListType } from './type'

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
