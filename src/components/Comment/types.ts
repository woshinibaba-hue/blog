import { CommentType } from '@/api/article/type'

import { EditorProps } from './Editor/types'

export interface CommentProps extends EditorProps {
  list: CommentType[]
  pageSize?: number
  handlerLike?: (id: number) => void
  // handlerMessage?: (id: number) => void
  reply: (id: number, content: string) => void
  isLogin: boolean
  describe?: string
  count?: number
}
