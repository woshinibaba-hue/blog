import { Action } from 'redux'
import { LayoutState, ActionType } from './types'

// 定义初始化数据
const initState: LayoutState = {
  isShowSidebar: false
}

export default (state: LayoutState = initState, action: Action<ActionType>) => {
  switch (action.type) {
    case 'isShowSidebar':
      return {
        ...state,
        isShowSidebar: !state.isShowSidebar
      }

    default:
      return state
  }
}
