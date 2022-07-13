import request from '@/server'

import { TagType, GetTagParams } from './type'

export function getTags(params: GetTagParams) {
  return request.get<TagType[]>({
    url: '/tag',
    params
  })
}
