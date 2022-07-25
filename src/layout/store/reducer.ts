import { message } from 'antd'
import storage from '@/utils/storage'

import { Action } from '@/store/types'
import { LayoutState, ActionType } from './types'

// 定义初始化数据
const initState: LayoutState = {
  isShowSidebar: false,
  isShowLogin: false,
  user: storage.get('user') || null
}

export default (state: LayoutState = initState, action: Action<ActionType>) => {
  switch (action.type) {
    case 'isShowSidebar':
      return {
        ...state,
        isShowSidebar: !state.isShowSidebar
      }
    case 'isShowLogin':
      return {
        ...state,
        isShowLogin: !state.isShowLogin
      }

    case 'setUser':
      return {
        ...state,
        user: action.payload
      }

    case 'logout':
      message.warning('退出登录成功~')
      return {
        ...state,
        user: null
      }

    default:
      return state
  }
}
