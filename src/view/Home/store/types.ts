import { ArticleType } from '@/api/article/type'

export type ActionType = 'setArticleList'

export type HomeStoreType = {
  articleList: ArticleType[]
}
