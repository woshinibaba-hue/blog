import { Action } from 'redux'

import { LayoutState } from '@/layout/store/types'

// 根级别的 state 类型
export type RootStateType = {
  layoutStore: LayoutState
}

// 穿参数的 Action 类型
export interface ActionType<A = unknown, T = unknown> extends Action<A> {
  payload: T
}
