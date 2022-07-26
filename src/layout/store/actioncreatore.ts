import storage from '@/utils/storage'

import { ActionType } from './types'
import { Action } from '@/store/types'
import { ILoginRes } from '@/api/login/types'

export const setIsShowSidebarAction: () => Action<ActionType> = () => ({
  type: 'isShowSidebar'
})

export const setIsShowLoginAction: () => Action<ActionType> = () => ({
  type: 'isShowLogin'
})

export const setUserAction: (
  user: ILoginRes
) => Action<ActionType, ILoginRes> = (user) => ({
  type: 'setUser',
  payload: user
})

export const logoutAction = () => {
  storage.remove('user')
  return {
    type: 'logout',
    payload: null
  }
}
