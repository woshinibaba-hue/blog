import request from '@/server'

import { SongDetailType, SongItmeType } from './type'

// 获取推荐歌单
export const getMusicList = () => {
  return request.get<SongItmeType[]>({
    url: '/playlist'
  })
}

// 获取当前音乐详情
export const getSongDetail = (id: string) => {
  return request.get<SongDetailType>({
    url: `/song?id=${id}`
  })
}

// 获取当前音乐歌词
export const getSongLyric = (id: string) => {
  return request.get<string>({
    url: `/lyric?id=${id}`
  })
}

// 搜索
export const searchSong = (key: string, limit = 10, offset = 0) => {
  return request.get<{ songs: SongItmeType[]; songCount: number }>({
    url: `/search?key=${key}`,
    params: {
      limit,
      offset
    }
  })
}
