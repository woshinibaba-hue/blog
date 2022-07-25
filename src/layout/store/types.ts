import { ILoginRes } from '@/api/login/types'

export type LayoutState = {
  isShowSidebar: boolean
  isShowLogin: boolean
  user: ILoginRes | null
}

export type ActionType = 'isShowSidebar' | 'isShowLogin' | 'setUser' | 'logout'
