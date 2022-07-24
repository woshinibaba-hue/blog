import { ArticleType } from '@/api/article/type'

export type ActionType = 'setArticleList' | 'setArticleDetail'

export type HomeStoreType = {
  articleList: ArticleType[]
  articleDetail: ArticleType | null
}
