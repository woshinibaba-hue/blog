import { Action } from '@/store/types'
import { ActionType, HomeStoreType } from './types'

const initState: HomeStoreType = {
  articleList: []
}

export default (state: HomeStoreType, action: Action<ActionType>) => {
  switch (action.type) {
    case 'setArticleList':
      return {
        ...state,
        articleList: action.payload
      }

    default:
      return initState
  }
}
