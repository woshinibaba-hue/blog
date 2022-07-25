import { useSelector, shallowEqual } from 'react-redux'

import { RootStateType } from '@/store/types'
import { ILoginRes } from '@/api/login/types'

export function useUser() {
  const { isShowSidebar, user } = useSelector<
    RootStateType,
    { isShowSidebar: boolean; user: ILoginRes | null }
  >(
    (state) => ({
      isShowSidebar: state.layoutStore.isShowSidebar,
      user: state.layoutStore.user
    }),
    shallowEqual
  )

  return { isShowSidebar, user }
}
