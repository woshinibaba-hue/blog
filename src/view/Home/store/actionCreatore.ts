import { Action } from '@/store/types'
import { ActionType } from './types'
import { ArticleType } from '@/api/article/type'

export const setArticleAction: (
  articleList: ArticleType[]
) => Action<ActionType, ArticleType[]> = (articleList) => ({
  type: 'setArticleList',
  payload: articleList
})

export const setArticleDetailAction: (
  articleDetail: ArticleType
) => Action<ActionType, ArticleType> = (articleDetail) => ({
  type: 'setArticleDetail',
  payload: articleDetail
})
