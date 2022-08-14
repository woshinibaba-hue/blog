import { legacy_createStore as createStore } from 'redux'

// 谷歌 redux-devtools-extension 插件
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './reducer'

// 创建 store 对象
// 并且提供一个 devtools 功能，方便调试
const store = createStore(
  reducer,
  // 判断是否是开发环境
  process.env.NODE_ENV === 'development' ? composeWithDevTools() : undefined
)

export default store
