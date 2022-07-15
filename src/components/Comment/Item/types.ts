import React from 'react'

import { CommentType } from '@/api/article/type'

export interface ICommentItemProps {
  comment: CommentType
  mainText: string
  handlerLike?: (id: number) => void
  // handlerMessage?: (id: number) => void
  reply: (id: number, content: string) => void
  children?: React.ReactNode
  isLogin: boolean
}
