import request from '@/server'

import { ArticleParamsType, ArticleType } from './type'

export const getArticleList = (params?: ArticleParamsType) => {
  return request.get<ArticleType[]>({
    url: '/article',
    params: params ?? {}
  })
}
