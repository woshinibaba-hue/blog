import { ArticleType } from '@/api/article/type'

export type ActionType = 'setArticleList' | 'setArticleDetail' | 'setIsMore'

export type HomeStoreType = {
  articleList: ArticleType[]
  articleDetail: ArticleType | null
  isMore: boolean
}
