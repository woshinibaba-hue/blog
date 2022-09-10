import React from 'react'

import { CommentType } from '@/api/article/type'

export interface ICommentItemProps {
  comment: CommentType
  mainText: string
  handlerLike?: (id: number) => void
  // handlerMessage?: (id: number) => void
  reply: (
    id: number,
    content: string,
    setMessage: (mes: string) => void
  ) => void
  children?: React.ReactNode
  isLogin: boolean
  handlerDelete: (id: number) => void
}
