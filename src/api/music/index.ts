import { requestMusic } from '@/server'

// 获取推荐歌单
export const getMusicList = () => {
  return requestMusic.get({
    url: '/playlist/detail?id=19723756'
  })
}

// 获取当前音乐详情
export const getSongDetail = (id: string) => {
  return requestMusic.get({
    url: `/song/detail?ids=${id}`
  })
}

// 获取当前音乐歌词
export const getSongLyric = (id: string) => {
  return requestMusic.get({
    url: `/lyric?id=${id}`
  })
}
