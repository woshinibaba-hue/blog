import { Action } from 'redux'
import { ActionType } from './types'

export const setIsShowSidebarAction: () => Action<ActionType> = () => ({
  type: 'isShowSidebar'
})
