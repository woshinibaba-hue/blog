import { Action } from '@/store/types'
import { ActionType, HomeStoreType } from './types'

const initState: HomeStoreType = {
  articleList: [],
  articleDetail: null
}

export default (
  state: HomeStoreType = initState,
  action: Action<ActionType>
) => {
  switch (action.type) {
    case 'setArticleList':
      return {
        ...state,
        articleList: action.payload
      }

    case 'setArticleDetail':
      return {
        ...state,
        articleDetail: action.payload
      }

    default:
      return state
  }
}
