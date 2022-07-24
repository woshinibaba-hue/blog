import { Action as ActionType } from 'redux'

import { LayoutState } from '@/layout/store/types'
import { HomeStoreType } from '@/view/Home/store/types'

// 根级别的 state 类型
export type RootStateType = {
  layoutStore: LayoutState
  homeStore: HomeStoreType
}

// 穿参数的 Action 类型
export interface Action<A = unknown, P = unknown> extends ActionType<A> {
  payload?: P
}
