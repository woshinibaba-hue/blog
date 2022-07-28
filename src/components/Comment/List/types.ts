import { CommentType } from '@/api/article/type'

export type CommentListProps = {
  comments: CommentType[]
  titleText?: string
  pageSize?: number
  handlerLike?: (id: number) => void
  // handlerMessage?: (id: number) => void
  isPagination?: boolean
  reply: (
    id: number,
    content: string,
    setMessage: (mes: string) => void
  ) => void
  isLogin: boolean
  count?: number
  onChange: (page: number, pageSize: number) => void
}
