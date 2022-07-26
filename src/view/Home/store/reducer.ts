import { Action } from '@/store/types'
import { ActionType, HomeStoreType } from './types'

const initState: HomeStoreType = {
  articleList: [],
  articleDetail: null,
  isMore: true
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

    case 'setIsMore':
      return {
        ...state,
        isMore: action.payload
      }

    default:
      return state
  }
}
