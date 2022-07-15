export type TagType = {
  id: number
  name: string
  parent_id: number | null
  cover: string
  color: string
}

export type GetTagParams = {
  limit?: number
  offset?: number
  key?: string
}
