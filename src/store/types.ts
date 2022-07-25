import { Action as ActionType } from 'redux'

import { LayoutState } from '@/layout/store/types'
import { HomeStoreType } from '@/view/Home/store/types'

// 根级别的 state 类型
export type RootStateType = {
  layoutStore: LayoutState
  homeStore: HomeStoreType
}

// 传参数的 Action 类型
export interface Action<A = unknown, P = unknown> extends ActionType<A> {
  payload?: P
}

// state 模块名称类型
export type ModuleName = keyof RootStateType

// store 模块当中的类型
export type ModuleType<M> = keyof M
