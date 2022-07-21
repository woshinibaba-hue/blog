// 导入 combineReducers 用于合并多个 reducer 函数
import { combineReducers } from 'redux'

import layoutReducer from '@/layout/store'

export default combineReducers({
  layoutStore: layoutReducer
})
